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
    console.log(body)
    // if(DailyQuantitySchema.safeParse(body).success === false){
    //     console.log('Invalid data', DailyQuantitySchema.safeParse(body))
    //     return NextResponse.json('Invlaid data', {status:400})
    // }
    

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