import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"


export async function PATCH(request:NextRequest, response:NextResponse){
    const body = await request.json()
    const ExistedtotalData = await prisma.totalQuantity.findUnique({
        where:{
            id:body.id
        }
    })
    if(!ExistedtotalData) return NextResponse.json("Not Found",{status : 404})
    try {
        const totalQuantity = await prisma.totalQuantity.update({
            where:{
                id:ExistedtotalData.id
            },
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