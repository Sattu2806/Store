import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {  
    try {
      const activities = await prisma.projectMileStone.findMany({
        include: {
          ProjectMileStoneInfo: true,
        },
        orderBy:{
            startDate:'asc'
        }
      });
      return NextResponse.json(activities);
    } catch (error) {
      console.error('Error getting activities', error);
      return NextResponse.error(); // Use integer status code
    }
}
