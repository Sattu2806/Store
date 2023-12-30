import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
  try {
    const formWorkData = await prisma.dailyProductivity.groupBy({
      by: ['MonthName'],
      _sum: {
        formWorkQty: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    const concreteData = await prisma.dailyProductivity.groupBy({
      by: ['MonthName'],
      _sum: {
        concreteQty: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    const excavationData = await prisma.dailyProductivity.groupBy({
      by: ['MonthName'],
      _sum: {
        excavationQty: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });
    
    const rebarData = await prisma.dailyProductivity.groupBy({
      by: ['MonthName'],
      _sum: {
        rebarQty: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    const roundToWholeNumber = (value:number | null) => Math.round(value || 0);

    const simplifiedFormWorkData = formWorkData.map((item) => ({
      month: item.MonthName,
      total: roundToWholeNumber(item._sum.formWorkQty),
    }));

    const simplifiedConcreteData = concreteData.map((item) => ({
      month: item.MonthName,
      total: roundToWholeNumber(item._sum.concreteQty),
    }));

    const simplifiedExcavationData = excavationData.map((item) => ({
      month: item.MonthName,
      total: roundToWholeNumber(item._sum.excavationQty),
    }));

    const simplifiedRebarData = rebarData.map((item) => ({
      month: item.MonthName,
      total: roundToWholeNumber(item._sum.rebarQty),
    }));


    return NextResponse.json({
      formWorkMonthData: simplifiedFormWorkData,
      concreteMonthData: simplifiedConcreteData,
      excavationMonthData: simplifiedExcavationData,
      rebarMonthData: simplifiedRebarData,
    });
  } catch (error) {
    console.error("Error fetching weekly data:", error);
    return NextResponse.error();
  }
}
