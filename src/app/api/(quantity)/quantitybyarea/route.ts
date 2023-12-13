import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const Type = searchParams.get('Type');
    const option = searchParams.get('option')
    const Area = searchParams.get('Area');

    console.log(Type)

  try {
    const sumFields: Record<string, boolean> = {
      id:true,
      FormWork: false,
      Concrete: false,
      Excavation: false,
      Rebar: false,
    };

    if (Type === "FormWork") {
      sumFields.FormWork = true;
    } else if (Type === "Excavation") {
      sumFields.Excavation = true;
    }else if (Type === "Rebar"){
        sumFields.Rebar = true
    }else if (Type === "Concrete"){
        sumFields.Concrete = true
    }

    if(Area === 'All'){



    if(option === 'month'){
        const MonthlyData = await prisma.project.groupBy({
            by: ['MonthName', 'Area'],
            _sum: sumFields,
            orderBy: {
              _sum: {
                WeekNumber: 'asc',
              },
            },
        });
        return NextResponse.json(MonthlyData);
    }else if(option === 'week'){
        const weeklyData = await prisma.project.groupBy({
            by: ['WeekNumber', 'Area'],
            _sum: sumFields,
            orderBy: {
              _sum: {
                WeekNumber: 'asc',
              },
            },
        });
        return NextResponse.json(weeklyData);
    }
    
    const weeklyData = await prisma.project.groupBy({
      by: ['Date','Area'],
      _sum: sumFields,
      orderBy: {
        _sum: {
          WeekNumber: 'asc',
        },
      },
    });

    return NextResponse.json(weeklyData);

    }else if(Area){
        if(option === 'month'){
            const MonthlyData = await prisma.project.groupBy({
                by: ['MonthName', 'Area'],
                _sum: sumFields,
                orderBy: {
                  _sum: {
                    WeekNumber: 'asc',
                  },
                },
                where:{
                    Area:Area
                }
            });
            return NextResponse.json(MonthlyData);
        }else if(option === 'week'){
            const weeklyData = await prisma.project.groupBy({
                by: ['WeekNumber', 'Area'],
                _sum: sumFields,
                orderBy: {
                  _sum: {
                    WeekNumber: 'asc',
                  },
                },
                where:{
                    Area:Area
                }
            });
            return NextResponse.json(weeklyData);
        }
        
        const weeklyData = await prisma.project.groupBy({
          by: ['Date','Area'],
          _sum: sumFields,
          orderBy: {
            _sum: {
              WeekNumber: 'asc',
            },
          },
          where:{
            Area:Area
          }
        });
    
        return NextResponse.json(weeklyData);
    }
  } catch (error) {
    console.error("Error fetching weekly data:", error);
    return NextResponse.error();
  }
}
