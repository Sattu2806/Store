import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const Category = searchParams.get('Category');
    const group = searchParams.get('group')
    console.log(Category)

    if(!Category){
        return NextResponse.json([])
    }

    if(Category === 'All' || !group){
        const response = await prisma.resourceData.findMany({
            where:{
                Group:group
            }
        })
        return NextResponse.json(response)
    }
    try {
        const bymonthmanpower = await prisma.resourceData.findMany({
            where:{
                category: Category,
                Group:group
            }
        })
        return NextResponse.json(bymonthmanpower)
    } catch (error) {
      console.error("Error fetching manpowedata data:", error)
      return NextResponse.error()
    }
}
  