import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"
import { TotalQuantitySchema } from "@/ZodSchema/QuantitySchema";

export async function POST(request:NextRequest, response:NextResponse){
    const body = await request.json()
    try {
        const totalQuantity = await prisma.totalQuantity.create({
            data:{
                groupId:body.groupId,
                categoryId:body.categoryId,
                foundationType:body.foundationType,
                totalFoundations: body.totalFoundations,
                excavationQty: body.excavationQty,
                rebarQty: body.rebarQty,
                concreteQty: body.concreteQty
            }
        })
        return NextResponse.json(totalQuantity, {status:201})
    } catch (error) {
        console.log("Error while creating totalQuantity data")
        return NextResponse.error()
    }
}