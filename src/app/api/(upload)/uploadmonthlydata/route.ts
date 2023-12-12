// Assuming you're using TypeScript

import prisma from "@/app/prismadb";
import { NextResponse} from "next/server";

type MonthlyData = {
    Type :  string;
    Month : string;
    Value:  number
};

export async function POST(request: Request) {
  try {
    const body: MonthlyData = await request.json();
    const {Type, Month, Value } = body

    const createdMonthlyData = await prisma.monthlyData.create({
      data: {
        Type,
        Month,
        Value
      }
    });

    return NextResponse.json(createdMonthlyData, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
