import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

const GetResourceDataByGroupCategory = async (group:string, Category:string) => {
    if(!Category){
        return NextResponse.json([])
    }

    if(Category === 'All' || !group){
        const response = await prisma.resourceData.findMany({
            where:{
                Group:group
            }
        })
        return NextResponse.json(response)
    }
    try {
        const bymonthmanpower = await prisma.resourceData.findMany({
            where:{
                category: Category,
                Group:group
            }
        })
        return NextResponse.json(bymonthmanpower)
    } catch (error) {
      console.error("Error fetching manpowedata data:", error)
      return NextResponse.error()
    }
}


const GetResourceDataByMonthCategory = async () => {
try {
    const ManpowerData = await prisma.resourceData.groupBy({
        by: ["Month", "category"],
        _sum:{
        Nos:true
        }
    })

    return NextResponse.json(ManpowerData);
    } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' });
    }
}

const GetResourceDataByMonthYearCategory = async (group:string, Category:string) => {
    try {
        const ManpowerApiData = await prisma.resourceData.groupBy({
            by:['Month', 'Year', 'category'],
              _sum:{
                Nos:true
              }
        })
    
        return NextResponse.json(ManpowerApiData);
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' });
      }
}