import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const Category = searchParams.get('Category');
    console.log(Category)

    if(!Category){
        return NextResponse.json([])
    }

    if(Category === 'All'){
        const response = await prisma.manpowerData.findMany({})
        return NextResponse.json(response)
    }
    try {
        const bymonthmanpower = await prisma.manpowerData.findMany({
            where:{
                category: Category
            }
        })
        console.log(bymonthmanpower)
        return NextResponse.json(bymonthmanpower)
    } catch (error) {
      console.error("Error fetching manpowedata data:", error)
      return NextResponse.error()
    }
}
  