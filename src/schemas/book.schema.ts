import { z } from "zod";

export const BookSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3, "3 or more charactere are required"),
  pages: z.number().min(1, "1 or more charactere are required"),
  category: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const CreateBookSchema = BookSchema.pick({
  name: true,
  pages: true,
  category: true
});

export const UpdateBookSchema = BookSchema.partial();