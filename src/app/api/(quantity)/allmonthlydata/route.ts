import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const ManpowerData = await prisma.monthlyData.findMany()

    return NextResponse.json(ManpowerData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}