import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const Date = searchParams.get('Date');
    const group = searchParams.get('group')
    console.log(Date)

    if(!Date){
        return NextResponse.json([])
    }

    const month = Date.split('-')[0]
    const year = Date.split('-')[1]

    try {
        const bymonthmanpower = await prisma.manpowerData.groupBy({
            by:['category'],
            _sum: {
                Nos:true
            },
            where:{
                Month:month,
                Year:parseInt(year),
                Group:group
            }
        })
        return NextResponse.json(bymonthmanpower)
    } catch (error) {
      console.error("Error fetching manpowedata data:", error)
      return NextResponse.error()
    }
}
  