import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"
import { DailyQuantitySchema } from "@/ZodSchema/QuantitySchema";

export async function GET(request: Request) {  
    try {
      const dailyQuantity = await prisma.dailyQuantity.findMany({
      });
      return NextResponse.json(dailyQuantity);
    } catch (error) {
      console.error('Error getting dailyQuantity data', error);
      return NextResponse.error();
    }
}

export async function POST(request:NextRequest, response:NextResponse){
    const body = await request.json()
    if(!DailyQuantitySchema.safeParse(body).success){
        return NextResponse.json('Invlaid data', {status:400})
    }

    try {
        const dailyQuantity = await prisma.dailyQuantity.create({
            data:{
                groupId:body.groupId,
                categoryId:body.categoryId,
                formWorkQty:body.formWorkQty,
                date:body.date,
                excavationQty: body.excavationQty,
                rebarQty: body.rebarQty,
                concreteQty: body.concreteQty,
                WeekNumber: body.WeekNumber,
                MonthName: body.MonthName,
            }
        })
        return NextResponse.json(dailyQuantity, {status:201})
    } catch (error) {
        console.log("Error while creating dailyQuantity data")
        return NextResponse.error()
    }
}

export async function DELETE(request:Request){
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json('id is required', {status:400})
    }
    if(typeof parseInt(id) !== 'number'){
        return NextResponse.json('Invalid id type is provided', {status:400})
    }

    const dailyQuantity= await prisma.dailyQuantity.findFirst({
        where:{
            id: parseInt(id)
        }
    })

    if(!dailyQuantity)
        return NextResponse.json("Invalid dailyQuantity id", {status:400})

    try{
        const deletedailyQuantity= await prisma.dailyQuantity.delete({
            where:{
                id:parseInt(id,10)
            }
        })
        return NextResponse.json(deletedailyQuantity)
    }catch(error){
        console.log(error)
        return NextResponse.json({error:'Error while deleting dailyQuantity'}, {status:500})
    }
}