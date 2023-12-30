import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const ManpowerApiData = await prisma.resourceData.groupBy({
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

  // try {
  //   const deleteall = await prisma.manpowerData.deleteMany()
  //   return NextResponse.json('All data deleetd successfully');
  // } catch (error) {
  //   return NextResponse.error()
  // }
}
