import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const totalValues = await prisma.project.aggregate({
        _sum:{
          FormWork:true,
          Concrete:true,
          Excavation:true,
          Rebar:true
        },
    
      });

    return NextResponse.json(totalValues);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
