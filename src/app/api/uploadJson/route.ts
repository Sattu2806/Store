import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismadb"
import { DailyQuantitySchema } from "@/ZodSchema/QuantitySchema";
import { headers } from 'next/headers'
import { DailyQuantity, ManpowerData, MonthlyData, Project, TotalQuantity, TradeData } from "@/lib/types";

export async function GET(request: Request) {  
    try {
      const dailyQuantity = await prisma.dailyProductivity.findMany({
      });
      return NextResponse.json(dailyQuantity);
    } catch (error) {
      console.error('Error getting dailyQuantity data', error);
      return NextResponse.error();
    }
}

export async function POST(request:NextRequest, response:NextResponse){
    const headersList = headers()
    const Type = headersList.get('Type')
    if(Type === 'Daily'){
        try {
            const body : DailyQuantity = await request.json()
            const dailyQuantity = await prisma.dailyProductivity.create({
                data:body
            })
            return NextResponse.json(dailyQuantity, {status:201})
        } catch (error) {
            console.error(`Error while processing ${Type} data:`, error);
            return NextResponse.error()
        }
    }
    else if(Type === 'Total') {
        try {
            const body : TotalQuantity = await request.json()
            const totalQuantity = await prisma.totalScope.create({
                data:body
            })
            return NextResponse.json(totalQuantity, {status:201})
        } catch (error) {
            console.error(`Error while processing ${Type} data:`, error);
            return NextResponse.error()
        }
    }
    else if(Type === 'Manpower'){
        try {
            const body : ManpowerData = await request.json()
            console.log(body)
            const ManpowerData = await prisma.resourceData.create({
                data:body
            })
            return NextResponse.json(ManpowerData, {status:201})
        } catch (error) {
            console.error(`Error while processing ${Type} data:`, error);
            return NextResponse.error()
        }
    }
    else if(Type === 'Trade'){
        try {
            const body : TradeData = await request.json()
            const tradeData = await prisma.tradeData.create({
                data:body
            })
            return NextResponse.json(tradeData, {status:201})
        } catch (error) {
            console.error(`Error while processing ${Type} data:`, error);
            return NextResponse.error()
        }
    }
    else if(Type === 'Monthly'){
        try {
            const body : MonthlyData = await request.json()
            const monthlyData = await prisma.monthlyData.create({
                data:body
            })
            return NextResponse.json(monthlyData, {status:201})
        } catch (error) {
            console.error(`Error while processing ${Type} data:`, error);
            return NextResponse.error()
        }
    }
    else if(Type === 'Project'){
        try {
            const body : Project = await request.json()
            const project = await prisma.project.create({
                data:body
            })
            return NextResponse.json(project, {status:201})
        } catch (error) {
            console.error(`Error while processing ${Type} data:`, error);
            return NextResponse.error()
        }
    } else{
        return NextResponse.json('Not Valid Upload')
    }
}


// export async function DELETE(request: Request) {  
//     try {
//       const dailyQuantity = await prisma.resourceData.deleteMany({
//       });
//       return NextResponse.json(dailyQuantity);
//     } catch (error) {
//       console.error('Error getting dailyQuantity data', error);
//       return NextResponse.error();
//     }
// }