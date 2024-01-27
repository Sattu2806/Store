import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GetAllImageGroupData = async () => {
    try {
        const Imagegroups = await prisma.imageGroup.findMany({
        });
        return { success: Imagegroups }
      } catch (error) {
        console.error('Error getting Image groups', error);
        return { error: "Could not get Image Group data" }
      }
}

export const MakeImageGroup = async (name:string) => {

    if (!name) {
        return NextResponse.json('groups name is required', { status: 400 });
    }
    try {
        const Imagegroup = await prisma.imageGroup.create({
            data:{
                name:name
            }
        })
        return { success: Imagegroup }
    } catch (error) {
        console.log("Error while creating Image group")
        return { error: "Could not make Image group" }
    }
}

export const DeleteGroup = async (id:number) => {
    if (!id) {
        return { error: "id is not provided" }
    }
    if(typeof id !== 'number'){
        return { error: "id type should be a number" }
    }

    const group = await prisma.imageGroup.findFirst({
        where:{
            id: id
        }
    })

    if(!group)
        return { error: "Image Group not found" }

    try{
        const deletegroup = await prisma.imageGroup.delete({
            where:{
                id:id
            }
        })
        return { success: 'Successfully deleted Image group' }
    }catch(error){
        console.log(error)
        return { error: "Error while deleting the Image group" }
    }
}

export const UpdateGroup = async (id:number, name:string) => {
    if (!id && !name) {
        return {error: 'Id and name are both required'}
    }
    if(typeof id !== 'number'){
        return {error: 'id should be atype of number'}
    }

    const group= await prisma.imageGroup.findFirst({
        where:{
            id:id
        }
    })

    if(!group)
        return {error: 'Could not find Image group'}

    try{
        const updatedgroup = await prisma.imageGroup.update({
            where:{
                id:group.id
            },
            data:{
                name:name
            }
        })
        return {success: updatedgroup}
    }catch(error){
        console.log(error)
        return {error: 'Could not update Image group'}
    }
}




