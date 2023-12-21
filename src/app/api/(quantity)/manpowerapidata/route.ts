import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const ManpowerApiData = await prisma.manpowerData.groupBy({
        by:['Month', 'Year', 'category'],
          _sum:{
            Nos:true
          }
    })

    return NextResponse.json(ManpowerApiData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
