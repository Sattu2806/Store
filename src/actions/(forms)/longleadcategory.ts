"use server";
import { LongLeadCategorySchema } from "@/ZodSchema/LongLead";
import {z} from "zod"
import prisma from "@/lib/prismadb"

export const MakeLongLeadCategory = async (values: z.infer<typeof LongLeadCategorySchema>) => {
    const validatedFields = LongLeadCategorySchema.safeParse(values)
    if (!validatedFields.success) throw new Error(`Validation failed for long lead`)

    try {
        await prisma.longLeadItemCategory.create({
            data: validatedFields.data
        })
        return { success: "Long Lead Created Successfully" }
    } catch (error) {
        return { error: "Could not create Long Lead Item", }
    }
}



export const GetLongLeadCategory = async () => {
        try {
            const response = await prisma.longLeadItemCategory.findMany({});
            return response; // Return the array directly
        } catch (error) {
            throw new Error("Could not fetch Long Lead Categories");
        }    
}