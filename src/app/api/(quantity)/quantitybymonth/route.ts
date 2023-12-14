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

    const simplifiedFormWorkData = formWorkData.map(item => ({
      month: item.MonthName,
      total: item._sum.FormWork || 0,
    }));

    const simplifiedConcreteData = concreteData.map(item => ({
      month: item.MonthName,
      total: item._sum.Concrete || 0,
    }));

    const simplifiedExcavationData = excavationData.map(item => ({
      month: item.MonthName,
      total: item._sum.Excavation || 0,
    }));

    const simplifiedRebarData = rebarData.map(item => ({
      month: item.MonthName,
      total: item._sum.Rebar || 0,
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
