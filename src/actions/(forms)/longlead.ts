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
    const statusMap: Record<string, any> = {
      technicalEvaluation: { technicalEvaluation: { upsert: { create: { status: status as TechnicalPR }, update: { status: status as TechnicalPR } } } },
      prStatus: { prStatus: { upsert: { create: { status: status as TechnicalPR }, update: { status: status as TechnicalPR } } } },
      rfqStatus: { rfqStatus: { upsert: { create: { status: status as RFQ }, update: { status: status as RFQ } } } },
      receivedQuotation: { receivedQuotation: { upsert: { create: { status: status as ReceivedQuotation }, update: { status: status as ReceivedQuotation } } } },
      poStatus: { poStatus: { upsert: { create: { status: status as PO }, update: { status: status as PO } } } },
      manufacturingStatus: { manufacturingStatus: { upsert: { create: { status: status as Manufacturing }, update: { status: status as Manufacturing } } } },
      finalInspection: { finalInspection: { upsert: { create: { status: status as FinalInspection }, update: { status: status as FinalInspection } } } },
      deliveryToSite: { deliveryToSite: { upsert: { create: { status: status as DeliveryToSite }, update: { status: status as DeliveryToSite } } } },
    };
  
    const updateOperation = statusMap[statusKey];
  
    if (updateOperation) {
      await prisma.longLeadItem.update({
        where: { id },
        data: updateOperation,
      });
      return { success: "Status Change Successfully" };
    } else {
      console.log(`Unsupported status key: ${statusKey}`);
      return { error: "Status Change Error" };
    }
  };
  
  
  