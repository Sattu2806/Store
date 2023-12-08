import { z } from "zod";

// Zod schema for Category model
export const CategorySchema = z.object({
    categoryName: z.string().min(1, "Category name must not be empty"),
})
export type CategoryType = z.infer<typeof CategorySchema>;