import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"
import { CategorySchema } from "@/ZodSchema/QuantitySchema";

export async function GET(request: Request) {  
    try {
      const categories = await prisma.category.findMany({
      });
      return NextResponse.json(categories);
    } catch (error) {
      console.error('Error getting categories', error);
      return NextResponse.error();
    }
}

export async function POST(request:NextRequest, response:NextResponse){
    const body = await request.json()
    if(!CategorySchema.safeParse(body).success){
        return NextResponse.json('Invlaid data', {status:400})
    }

    try {
        const category = await prisma.category.create({
            data:{
                name:body.name,
                groupId:body.groupId
            }
        })
        return NextResponse.json(category, {status:201})
    } catch (error) {
        console.log("Error while creating category")
        return NextResponse.error()
    }
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

    const category = await prisma.category.findFirst({
        where:{
            id: parseInt(id)
        }
    })

    if(!category)
        return NextResponse.json("Invalid category id", {status:400})

    try{
        const deletecategory = await prisma.category.delete({
            where:{
                id:parseInt(id,10)
            }
        })
        return NextResponse.json(deletecategory)
    }catch(error){
        console.log(error)
        return NextResponse.json({error:'Error while deleting category'}, {status:500})
    }
}