import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismadb"
import { DailyQuantitySchema } from "@/ZodSchema/QuantitySchema";
import { z } from "zod"

type DailyQuantityT = z.infer<typeof DailyQuantitySchema>

const getISOWeek = (date: Date): number => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart: Date = new Date(d.getFullYear(), 0, 1);
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};

const getWeekandMonth = (data:DailyQuantityT) => {
    const weekNumber = getISOWeek(new Date(data.date));
    const monthName = new Date(data.date).toLocaleString('en', { month: 'short' });
    return {
        ...data,
        WeekNumber: weekNumber,
        MonthName: monthName,
    };
}

export async function GET(request: Request) {  
    try {
      const dailyQuantity = await prisma.dailyProductivity.findMany({
      });
      return NextResponse.json(dailyQuantity);
    } catch (error) {
      console.error('Error getting dailyQuantity data', error);
      return NextResponse.error();
    }
}

export async function POST(request:NextRequest, response:NextResponse){
    const body = await request.json()
    const newData = getWeekandMonth(body)
    console.log(newData)
    if(newData){
        try {
            const dailyQuantity = await prisma.dailyProductivity.create({
                data:{
                    groupId:newData.groupId,
                    categoryId:newData.categoryId,
                    formWorkQty:newData.formWorkQty,
                    date:newData.date,
                    excavationQty: newData.excavationQty,
                    rebarQty: newData.rebarQty,
                    concreteQty: newData.concreteQty,
                    WeekNumber: newData.WeekNumber,
                    MonthName: newData.MonthName,
                }
            })
            return NextResponse.json(dailyQuantity, {status:201})
        } catch (error) {
            console.log("Error while creating dailyQuantity data")
            return NextResponse.error()
        }
    }
    return NextResponse.json("Error while adding data")
}

export async function DELETE(request:Request){
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json('id is required', {status:400})
    }
    if(typeof parseInt(id) !== 'number'){
        return NextResponse.json('Invalid id type is provided', {status:400})
    }

    const dailyQuantity= await prisma.dailyProductivity.findFirst({
        where:{
            id: parseInt(id)
        }
    })

    if(!dailyQuantity)
        return NextResponse.json("Invalid dailyQuantity id", {status:400})

    try{
        const deletedailyQuantity= await prisma.dailyProductivity.delete({
            where:{
                id:parseInt(id,10)
            }
        })
        return NextResponse.json(deletedailyQuantity)
    }catch(error){
        console.log(error)
        return NextResponse.json({error:'Error while deleting dailyQuantity'}, {status:500})
    }
}