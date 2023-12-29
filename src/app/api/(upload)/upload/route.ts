import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"
import { DailyQuantitySchema } from "@/ZodSchema/QuantitySchema";
import { headers } from 'next/headers'
import { DailyQuantity, ManpowerData, MonthlyData, Project, TotalQuantity, TradeData } from "@/lib/types";

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

export async function POST(request: NextRequest, response: NextResponse) {
    const headersList = headers();
    const Type = headersList.get('Type');

    let body: any;
    let result: any;
    let model: any;

    switch (Type) {
        case 'Daily':
            model = prisma.dailyQuantity;
            break;
        case 'Total':
            model = prisma.totalQuantity;
            break;
        case 'Manpower':
            model = prisma.manpowerData;
            break;
        case 'Trade':
            model = prisma.tradeData;
            break;
        case 'Monthly':
            model = prisma.monthlyData;
            break;
        case 'Project':
            model = prisma.project;
            break;
        default:
            return NextResponse.json('Not Valid Upload');
    }

    try {
        body = await request.json();
        result = await model.create({ data: body });
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.log(`Error while creating ${Type} data`);
        return NextResponse.error();
    }
}
