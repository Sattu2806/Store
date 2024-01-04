import prisma from "@/lib/prismadb";
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
    const totalScopeQt = await prisma.totalScope.aggregate({
        _sum:{
          totalFoundations:true,
          concreteQty:true,
          excavationQty:true,
          rebarQty:true
        },
    
      });

    return NextResponse.json({totalValues, totalScopeQt});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
