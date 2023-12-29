import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prismadb";

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { id, excavationQty, formWorkQty, rebarQty, concreteQty } = body;

  try {
    const existingDailyQuantity = await prisma.dailyProductivity.findUnique({
      where: {
        id,
      },
    });

    if (existingDailyQuantity) {
      const updateData: {
        excavationQty?: number;
        formWorkQty?: number;
        rebarQty?: number;
        concreteQty?: number;
      } = {};

      if (excavationQty !== null) {
        updateData.excavationQty = excavationQty;
      }

      if (formWorkQty !== null) {
        updateData.formWorkQty = formWorkQty;
      }

      if (rebarQty !== null) {
        updateData.rebarQty = rebarQty;
      }

      if (concreteQty !== null) {
        updateData.concreteQty = concreteQty;
      }

      if (Object.keys(updateData).length > 0) {
        const updatedDailyQuantity = await prisma.dailyProductivity.update({
          where: { id: id },
          data: updateData,
        });

        return NextResponse.json(updatedDailyQuantity, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "No fields to update", existingDailyQuantity },
          { status: 200 }
        );
      }
    } else {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating dailyquantity:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}
