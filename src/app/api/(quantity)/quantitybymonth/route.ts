import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    const weeklyData = await prisma.project.groupBy({
      by: ['MonthName'],
      _sum: {
        FormWork: true,
        Concrete:true,
        Excavation:true,
        Rebar:true
      },
      orderBy: {
        _sum: {
          WeekNumber:'asc'
        },
      },
    });

    return NextResponse.json(weeklyData);
  } catch (error) {
    console.error("Error fetching weekly data:", error);
    return NextResponse.error();
  }
}
