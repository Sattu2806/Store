import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";


// export async function GET(request: Request) {
//   try {
//     const weeklyData = await prisma.project.groupBy({
//       by: ['MonthName'],
//       _sum: {
//         FormWork: true,
//         Concrete:true,
//         Excavation:true,
//         Rebar:true
//       },
//       orderBy: {
//         _sum: {
//           WeekNumber:'asc'
//         },
//       },
//     });

//     return NextResponse.json(weeklyData);
//   } catch (error) {
//     console.error("Error fetching weekly data:", error);
//     return NextResponse.error();
//   }
// }

export async function GET(request: Request) {
  try {
    const formWorkData = await prisma.project.groupBy({
      by: ['MonthName'],
      _sum: {
        FormWork: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    const concreteData = await prisma.project.groupBy({
      by: ['MonthName'],
      _sum: {
        Concrete: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    const excavationData = await prisma.project.groupBy({
      by: ['MonthName'],
      _sum: {
        Excavation: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    const rebarData = await prisma.project.groupBy({
      by: ['MonthName'],
      _sum: {
        Rebar: true,
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
      total: roundToWholeNumber(item._sum.FormWork),
    }));

    const simplifiedConcreteData = concreteData.map((item) => ({
      month: item.MonthName,
      total: roundToWholeNumber(item._sum.Concrete),
    }));

    const simplifiedExcavationData = excavationData.map((item) => ({
      month: item.MonthName,
      total: roundToWholeNumber(item._sum.Excavation),
    }));

    const simplifiedRebarData = rebarData.map((item) => ({
      month: item.MonthName,
      total: roundToWholeNumber(item._sum.Rebar),
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
