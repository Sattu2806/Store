import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const Category = searchParams.get('Category');
    console.log(Category)

    if(!Category){
        return NextResponse.json([])
    }

    if(Category === 'All'){
        const response = await prisma.resourceData.findMany({
        })
        return NextResponse.json(response)
    }
    try {
        const bymonthmanpower = await prisma.resourceData.findMany({
            where:{
                category: Category,
            }
        })
        return NextResponse.json(bymonthmanpower)
    } catch (error) {
      console.error("Error fetching manpowedata data:", error)
      return NextResponse.error()
    }
}
  