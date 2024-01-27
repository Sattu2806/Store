import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismadb"
import { GroupSchema } from "@/ZodSchema/QuantitySchema";

export const GetAllGroupData = async () => {
    try {
        const groups = await prisma.group.findMany({
        });
        return { success: groups }
      } catch (error) {
        console.error('Error getting groups', error);
        return { error: "Could not get Group data" }
      }
}


export const MakeGroup = async (name:string) => {
    if(!GroupSchema.safeParse({name}).success){
        return { error: "Invalid data type" }
    }

    try {
        const group = await prisma.group.create({
            data:{
                name:name
            }
        })
        return { success: group }
    } catch (error) {
        console.log("Error while creating group")
        return { error: "Could not make group" }
    }
}

export const DeleteGroup = async (id:number) => {
    if (!id) {
        return { error: "id is not provided" }
    }
    if(typeof id !== 'number'){
        return { error: "id type should be a number" }
    }

    const group = await prisma.group.findFirst({
        where:{
            id: id
        }
    })

    if(!group)
        return { error: "Group not found" }

    try{
        const deletegroup = await prisma.group.delete({
            where:{
                id:id
            }
        })
        return { success: 'Successfully deleted group' }
    }catch(error){
        console.log(error)
        return { error: "Error while deleting the group" }
    }
}


export const UpdateGroup = async (id:number, name:string) => {
    if (!id) {
        return NextResponse.json('id is required', {status:400})
    }
    if(typeof id !== 'number'){
        return NextResponse.json('Invalid id type is provided', {status:400})
    }

    const group= await prisma.group.findFirst({
        where:{
            id:id
        }
    })

    if(!group)
        return NextResponse.json("Invalid category id", {status:400})

    try{
        const updatedgroup = await prisma.group.update({
            where:{
                id:group.id
            },
            data:{
                name:name
            }
        })
        return NextResponse.json(updatedgroup)
    }catch(error){
        console.log(error)
        return NextResponse.json({error:'Error while updating group'}, {status:500})
    }
}

