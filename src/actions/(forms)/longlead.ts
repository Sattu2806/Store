"use server";
import { LongLeadItemSchema } from "@/ZodSchema/LongLead";
import {z} from "zod"
import prisma from "@/lib/prismadb"

export const MakeLongLead = async (values: z.infer<typeof LongLeadItemSchema>) => {
    const validatedFields = LongLeadItemSchema.safeParse(values)
    if (!validatedFields.success) throw new Error(`Validation failed for long lead`)

    try {
        await prisma.longLeadItem.create({
            data: validatedFields.data
        })
        return { success: "Long Lead Created Successfully" }
    } catch (error) {
        return { error: "Could not create Long Lead Item", }
    }
}