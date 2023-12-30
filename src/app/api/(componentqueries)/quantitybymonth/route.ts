import prisma from "@/lib/prismadb";
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
    const getData = async (field: string) => {
      const data = await prisma.project.groupBy({
        by: ['MonthName'],
        _sum: { [field]: true },
        orderBy: { _sum: { WeekNumber: 'asc' } },
      });

      return data.map((item) => ({
        month: item.MonthName,
        total: Math.round(item._sum[field] || 0),
      }));
    };

    const formWorkMonthData = await getData('FormWork');
    const concreteMonthData = await getData('Concrete');
    const excavationMonthData = await getData('Excavation');
    const rebarMonthData = await getData('Rebar');

    return NextResponse.json({
      formWorkMonthData,
      concreteMonthData,
      excavationMonthData,
      rebarMonthData,
    });
  } catch (error) {
    console.error("Error fetching weekly data:", error);
    return NextResponse.error();
  }
}
