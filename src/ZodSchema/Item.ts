import {z} from "zod"


const variantSchema = z.object({
    variantName: z.string().min(1, { message: 'Variant name is required' }),
    price: z.number().min(0.01, { message: 'Price must be greater than 0' }),
    pictures: z.array(z.string()).refine((value) => value.length > 0, { message: 'At least one picture is required' }),
    stock: z.number().int().min(0, { message: 'Stock must be a non-negative integer' }),
    // itemId: z.number().positive("Item ID must be a positive integer"),
    colors: z.array(z.string()),
    size: z.string().nullable(),
});

const Status = {
  active: 'active' as const,
  inactive: 'inactive' as const,
};

export const itemSchema = z.object({
    itemName: z.string().min(1, { message: 'Item name is required' }),
    categoryId: z.number().int().positive({ message: 'Valid category ID is required' }),
    variants: z.array(variantSchema).refine((value) => value.length > 0, { message: 'At least one variant must be provided' }),
    brand: z.string().nullable(),
    weight: z.number().nullable(),
    dimensions: z.string().nullable(),
    stockStatus: z.string().nullable(),
    regularPrice: z.number().min(0.01, { message: 'Regular price must be greater than 0' }),
    discountedPrice: z.number().nullable(),
    itemStatus: z.nativeEnum(Status),
    description: z.string().nullable()
})
    .refine((data) => {
        return data.variants.length > 0;
    }, { message: 'At least one variant must be provided' });
  
  export type ItemType = z.infer<typeof itemSchema>;
  export type VariantType = z.infer<typeof variantSchema>;

  