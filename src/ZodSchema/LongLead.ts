import {z} from "zod"

// LongLeadItem model
export const LongLeadItemSchema = z.object({
    image: z.string().optional(),
    country: z.string(),
    categoryId: z.number(),
    vendor: z.string(),
    description: z.string(),
    qty: z.number().int(),
    unit: z.string(),
    deliveryDate: z.date(),
    requiredAtSiteDate: z.date(),
    deliveryMode: z.string(),
  });

export const LongLeadCategorySchema  = z.object({
    name: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
})
  