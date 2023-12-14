import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   try {
//     const weeklyData = await prisma.project.groupBy({
//       by: ['WeekNumber'],
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
      by: ['WeekNumber'],
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
      by: ['WeekNumber'],
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
      by: ['WeekNumber'],
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
      by: ['WeekNumber'],
      _sum: {
        Rebar: true,
      },
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    // Simplify each dataset
    const simplifiedFormWorkData = formWorkData.map(item => ({
      WeekNumber: item.WeekNumber,
      FormWork: item._sum.FormWork || 0,
    }));

    const simplifiedConcreteData = concreteData.map(item => ({
      WeekNumber: item.WeekNumber,
      Concrete: item._sum.Concrete || 0,
    }));

    const simplifiedExcavationData = excavationData.map(item => ({
      WeekNumber: item.WeekNumber,
      Excavation: item._sum.Excavation || 0,
    }));

    const simplifiedRebarData = rebarData.map(item => ({
      WeekNumber: item.WeekNumber,
      Rebar: item._sum.Rebar || 0,
    }));

    return NextResponse.json({
      formWorkData: simplifiedFormWorkData,
      concreteData: simplifiedConcreteData,
      excavationData: simplifiedExcavationData,
      rebarData: simplifiedRebarData,
    });
  } catch (error) {
    console.error("Error fetching weekly data:", error);
    return NextResponse.error();
  }
}
