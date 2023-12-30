import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const Type = searchParams.get('Type');
  const option = searchParams.get('option');
  const groupId = searchParams.get('groupId');
  const categoryId = searchParams.get('categoryId');


  console.log(Type);

  try {
        const sumFields: Record<string, boolean> = {
          id:true,
          formWorkQty: false,
          concreteQty: false,
          excavationQty: false,
          rebarQty: false,
        };
    
        if (Type === "formWorkQty") {
          sumFields.formWorkQty= true;
        } else if (Type === "excavationQty") {
          sumFields.excavationQty = true;
        }else if (Type === "rebarQty"){
            sumFields.rebarQty = true
        }else if (Type === "concreteQty"){
            sumFields.concreteQty = true
        }

        console.log(groupId)

        if(groupId && categoryId){
            if(option === 'month'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["MonthName"],
                    _sum:sumFields,
                    where:{
                        groupId:parseInt(groupId as string),
                        categoryId:parseInt(categoryId as string)
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    },
                })
                return NextResponse.json(groupdata)
            }else if(option === 'week'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["WeekNumber"],
                    _sum:sumFields,
                    where:{
                        groupId:parseInt(groupId as string),
                        categoryId:parseInt(categoryId as string)
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }else if(option === 'day'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["date"],
                    _sum:sumFields,
                    where:{
                        groupId:parseInt(groupId as string),
                        categoryId:parseInt(categoryId as string)
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }
        } else if(groupId && categoryId === null){
            if(option === 'month'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["MonthName"],
                    _sum:sumFields,
                    where:{
                        groupId:parseInt(groupId as string),
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }else if(option === 'week'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["WeekNumber"],
                    _sum:sumFields,
                    where:{
                        groupId:parseInt(groupId as string),
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }else if(option === 'day'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["date"],
                    _sum:sumFields,
                    where:{
                        groupId:parseInt(groupId as string),
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }
        }else if(categoryId && groupId === null){
            if(option === 'month'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["MonthName"],
                    _sum:sumFields,
                    where:{
                        categoryId:parseInt(categoryId as string)
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        },
                    }
                })
                return NextResponse.json(groupdata)
            }else if(option === 'week'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["WeekNumber"],
                    _sum:sumFields,
                    where:{
                        categoryId:parseInt(categoryId as string)
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }else if(option === 'day'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["date"],
                    _sum:sumFields,
                    where:{
                        categoryId:parseInt(categoryId as string)
                    },
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }
        }else {
            if(option === 'month'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["MonthName"],
                    _sum:sumFields,
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }else if(option === 'week'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["WeekNumber"],
                    _sum:sumFields,
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }else if(option === 'day'){
                const groupdata = await prisma.dailyProductivity.groupBy({
                    by:["date"],
                    _sum:sumFields,
                    orderBy:{
                        _sum:{
                            WeekNumber: 'asc',
                        }
                    }
                })
                return NextResponse.json(groupdata)
            }
        }
      } catch (error) {
        console.error("Error fetching weekly data:", error);
        return NextResponse.error();
      }
}



