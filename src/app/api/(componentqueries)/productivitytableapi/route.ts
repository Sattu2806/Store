import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const Type = searchParams.get('Type');
  const selectedMonth = searchParams.get('selectedMonth');

  try {
    const selectFields: Record<string, boolean> = {
      id: true,
      date: true,
      formWorkQty: false,
      concreteQty: false,
      excavationQty: false,
      rebarQty: false,
    };

    if (Type === "formWorkQty") {
      selectFields.formWorkQty = true;
    } else if (Type === "excavationQty") {
      selectFields.excavationQty = true;
    } else if (Type === "rebarQty") {
      selectFields.rebarQty = true;
    } else if (Type === "concreteQty") {
      selectFields.concreteQty = true;
    } else {
      return NextResponse.json([]);
    }

    console.log(selectFields, selectedMonth, Type);

    const response = await prisma.dailyProductivity.findMany({
      select: selectFields,
      where: {
        MonthName: selectedMonth ? selectedMonth : 'Jan',
      },
      orderBy: {
        date: "asc",
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching weekly data:", error);
    return NextResponse.error();
  }
}
