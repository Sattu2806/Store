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
    const { category,Trade,Year,Month,Nos,group} = body
    console.log(body)

    try {
        const dailyQuantity = await prisma.manpowerData.create({
            data:{
                Group:group,
                category,
                Trade,
                Year,
                Month,
                Nos,
            }
        })
        return NextResponse.json(dailyQuantity, {status:201})
    } catch (error) {
        console.log("Error while creating dailyQuantity data")
        return NextResponse.error()
    }
}