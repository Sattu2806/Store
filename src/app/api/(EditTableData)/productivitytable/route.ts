import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prismadb";


export async function GET(request: Request) {  
    try {  
      const response = await prisma.dailyProductivity.findMany({
      });
      return NextResponse.json(response);
    } catch (error) {
      console.error("Error fetching weekly data:", error);
      return NextResponse.error();
    }
  }
  

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { id, Excavation, FormWork, Rebar, Concrete } = body;

  try {
    const existingupdatedProject = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    if (existingupdatedProject) {
      const updateData: {
        Excavation?: number;
        FormWork?: number;
        Rebar?: number;
        Concrete?: number;
      } = {};

      if (Excavation !== null) {
        updateData.Excavation = Excavation;
      }

      if (FormWork !== null) {
        updateData.FormWork = FormWork;
      }

      if (Rebar !== null) {
        updateData.Rebar = Rebar;
      }

      if (Concrete !== null) {
        updateData.Concrete = Concrete;
      }

      if (Object.keys(updateData).length > 0) {
        const updatedProject = await prisma.project.update({
          where: { id: id },
          data: updateData,
        });

        return NextResponse.json(updatedProject, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "No fields to update", existingupdatedProject },
          { status: 200 }
        );
      }
    } else {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating project data:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}
