// Assuming you're using TypeScript

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
};

export async function POST(request: Request) {
  try {
    const body: Project = await request.json();
    const { Discipline, Area, Date, Excavation, FormWork, Rebar, Concrete} = body

    const createdProject = await prisma.project.create({
      data: {
        Discipline,
        Area,
        Date,
        Excavation,
        FormWork,
        Rebar,
        Concrete
      }
    });

    return NextResponse.json(createdProject, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
