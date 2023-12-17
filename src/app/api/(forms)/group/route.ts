import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prismadb"
import { GroupSchema } from "@/ZodSchema/QuantitySchema";

export async function GET(request: Request) {  
    try {
      const groups = await prisma.group.findMany({
      });
      return NextResponse.json(groups);
    } catch (error) {
      console.error('Error getting groups', error);
      return NextResponse.error();
    }
}

export async function POST(request:NextRequest, response:NextResponse){
    const body = await request.json()
    if(!GroupSchema.safeParse(body).success){
        return NextResponse.json('Invlaid data', {status:400})
    }

    try {
        const group = await prisma.group.create({
            data:{
                name:body.name
            }
        })
        return NextResponse.json(group, {status:201})
    } catch (error) {
        console.log("Error while creating group")
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

    const group = await prisma.group.findFirst({
        where:{
            id: parseInt(id)
        }
    })

    if(!group)
        return NextResponse.json("Invalid group id", {status:400})

    try{
        const deletegroup = await prisma.group.delete({
            where:{
                id:parseInt(id,10)
            }
        })
        return NextResponse.json(deletegroup)
    }catch(error){
        console.log(error)
        return NextResponse.json({error:'Error while deleting group'}, {status:500})
    }
}