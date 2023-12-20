import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const Month = searchParams.get('Month');
    console.log(Month)

    if(!Month){
        return NextResponse.json([])
    }

    console.log(Month)

    try {
        const bymonthmanpower = await prisma.manpowerData.groupBy({
            by:['category'],
            _sum: {
                Nos:true
            },
            where:{
                Month:Month
            }
        })
        return NextResponse.json(bymonthmanpower)
    } catch (error) {
      console.error("Error fetching manpowedata data:", error)
      return NextResponse.error()
    }
}
  