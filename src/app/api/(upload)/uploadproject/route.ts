
import prisma from "@/app/prismadb";
import { NextResponse} from "next/server";

type Project = {
  Discipline: string;
  Area: string;
  Date: Date;
  Excavation: number;
  FormWork: number;
  Rebar: number;
  Concrete: number;
  WeekNumber: number,
  MonthName: string
};

export async function POST(request: Request) {
  try {
    const body: Project = await request.json();
    const { Discipline, Area, Date, Excavation, FormWork, Rebar, Concrete, WeekNumber,MonthName} = body

    const createdProject = await prisma.project.create({
      data: {
        Discipline,
        Area,
        Date,
        Excavation,
        FormWork,
        Rebar,
        Concrete,
        WeekNumber,
        MonthName
      }
    });

    return NextResponse.json(createdProject, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
