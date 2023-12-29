import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const totalquantitysum = await prisma.totalScope.aggregate({
      _sum:{
        totalFoundations:true,
        concreteQty:true,
        excavationQty:true,
        rebarQty:true
      },
    });
    const dailyquantitysum = await prisma.dailyProductivity.aggregate({
      _sum:{
        formWorkQty:true,
        concreteQty:true,
        excavationQty:true,
        rebarQty:true
      },
    });

    const SumData = {totalquantitysum, dailyquantitysum};

    return NextResponse.json(SumData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
