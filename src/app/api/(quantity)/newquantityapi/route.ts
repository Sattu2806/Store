import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export default async function GET(request: Request) {

  try {
    const groups = await prisma.group.findMany({
      select:{
        dailyQuantities:true,
        totalQuantities:true
      }
    })

    
    NextResponse.json(groups);
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: 'Internal Server Error' });
  }
}