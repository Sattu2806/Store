import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const bymonthmanpower = await prisma.monthlyData.findMany()
        return NextResponse.json(bymonthmanpower)
    } catch (error) {
      console.error("Error fetching manpowedata data:", error);
      return NextResponse.error();
    }
  }
  