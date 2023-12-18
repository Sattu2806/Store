import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"
import { CategorySchema } from "@/ZodSchema/QuantitySchema";

export async function GET(request: Request) {  
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const groupId = searchParams.get('groupId')
    try {
      const categories = await prisma.category.findMany({
        where:{
            groupId:parseInt(groupId as string)
        }
      });
      return NextResponse.json(categories);
    } catch (error) {
      console.error('Error getting categories', error);
      return NextResponse.error();
    }
}