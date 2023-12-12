
import prisma from "@/app/prismadb";
import { NextResponse} from "next/server";

type TradeData = {
    Type:  string
    Trade:  string
    Month:  string
    Value:  number
};

export async function POST(request: Request) {
  try {
    const body: TradeData = await request.json();
    const {    Type, Trade, Month, Value} = body

    const createdTradeData = await prisma.tradeData.create({
      data: {
        Type,
        Trade,
        Month,
        Value
      }
    });

    return NextResponse.json(createdTradeData, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
