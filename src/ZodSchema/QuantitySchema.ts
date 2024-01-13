import { WeekNumber } from 'react-day-picker';
import { z } from 'zod';

const GroupSchema = z.object({
  name: z.string(),
});

const CategorySchema = z.object({
  name: z.string(),
  groupId:z.number()
});

const TotalQuantitySchema = z.object({
  groupId: z.number(),
  categoryId: z.number(),
  foundationType: z.string(),
  totalFoundations: z.number(),
  excavationQty: z.number(),
  rebarQty: z.number(),
  concreteQty: z.number(),
});

const DailyQuantitySchema = z.object({
  groupId: z.number(),
  categoryId: z.number(),
  date: z.date(),
  excavationQty: z.number(),
  formWorkQty: z.number(),
  rebarQty: z.number(),
  concreteQty: z.number(),
});


export { GroupSchema, CategorySchema, TotalQuantitySchema, DailyQuantitySchema };
