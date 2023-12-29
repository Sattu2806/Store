import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"
import { TotalQuantitySchema } from "@/ZodSchema/QuantitySchema";

export async function GET(request: Request) {  
    try {
      const totalQuantity = await prisma.totalQuantity.findMany({
      });
      return NextResponse.json(totalQuantity);
    } catch (error) {
      console.error('Error getting totalQuantity data', error);
      return NextResponse.error();
    }
}

export async function POST(request:NextRequest, response:NextResponse){
    const body = await request.json()
    if(!TotalQuantitySchema.safeParse(body).success){
        return NextResponse.json('Invlaid data', {status:400})
    }

    try {
        const totalQuantity = await prisma.totalQuantity.create({
            data:{
                groupId:body.groupId,
                categoryId:body.categoryId,
                foundationType:body.foundationType,
                totalFoundations: body.totalFoundations,
                excavationQty: body.excavationQty,
                rebarQty: body.rebarQty,
                concreteQty: body.concreteQty
            }
        })
        return NextResponse.json(totalQuantity, {status:201})
    } catch (error) {
        console.log("Error while creating totalQuantity data")
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

    const totalQuantity= await prisma.totalQuantity.findFirst({
        where:{
            id: parseInt(id)
        }
    })

    if(!totalQuantity)
        return NextResponse.json("Invalid totalquantity id", {status:400})

    try{
        const deletetotalquantity= await prisma.totalQuantity.delete({
            where:{
                id:parseInt(id,10)
            }
        })
        return NextResponse.json(deletetotalquantity)
    }catch(error){
        console.log(error)
        return NextResponse.json({error:'Error while deleting totalquantity'}, {status:500})
    }
}