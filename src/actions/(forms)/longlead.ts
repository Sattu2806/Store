"use server";
import { LongLeadItemSchema } from "@/ZodSchema/LongLead";
import {z} from "zod"
import prisma from "@/lib/prismadb"
import { DeliveryToSite, FinalInspection, Manufacturing, PO, RFQ, ReceivedQuotation, TechnicalPR } from "@prisma/client";

export const MakeLongLead = async (values: z.infer<typeof LongLeadItemSchema>) => {
    const validatedFields = LongLeadItemSchema.safeParse(values)
    if (!validatedFields.success) throw new Error(`Validation failed for long lead`)

    console.log(validatedFields.data)
    
    if(!validatedFields.data.image){
        throw new Error(`Validation failed for long lead`)
    }

    const { categoryId, country, deliveryDate, deliveryMode, description, qty, requiredAtSiteDate, unit, vendor, image } = validatedFields.data

    try {
        await prisma.longLeadItem.create({
            data: {
                categoryId, 
                country, 
                deliveryDate, 
                deliveryMode, 
                description, 
                qty, 
                requiredAtSiteDate, 
                unit, 
                vendor, 
                image 
            }
        })
        return { success: "Long Lead Created Successfully" }
    } catch (error) {
        return 
    }
}

export const UpdatedLongLead = async (values: z.infer<typeof LongLeadItemSchema>, id:number) => {
    const validatedFields = LongLeadItemSchema.safeParse(values)
    if (!validatedFields.success) throw new Error(`Validation failed for long lead`)


    try {
        const data = await prisma.longLeadItem.update({
            where:{
                id
            },
            data: validatedFields.data
        })
        return { success: "Long Lead Updated Successfully" }
    } catch (error) {
        return { error: "Could not update Long Lead Item", }
    }
}

export const GetLongLead = async () => {
    try {
        const response = await prisma.longLeadItem.findMany({
            include:{
                deliveryToSite:true,
                finalInspection:true,
                manufacturingStatus:true,
                poStatus:true,
                prStatus:true,
                technicalEvaluation:true,
                receivedQuotation:true,
                rfqStatus:true            
    }
    });
        return {success: response}
    } catch (error) {
        throw new Error("Could not fetch Long Lead Categories");
    }   
}



export const updateStatus = async (statusKey: string, status: string, id: number) => {
    const updateOperation: Record<string, any> = {
      [statusKey]: {
        upsert: {
          create: { status },
          update: { status, updatedAt: new Date() },
        },
      },
    };
    try {
      if (updateOperation) {
        await prisma.longLeadItem.update({
          where: { id },
          data: updateOperation,
        });
        console.log('adcd')
        return { success: "Status Change Successfully" };
      } else {
        console.log(`Unsupported status key: ${statusKey}`);
        return { error: "Status Change Error" };
      }
    } catch (error) {
      console.error("Error updating status:", error);
      return { error: "Status Change Error" };
    }
  };
  