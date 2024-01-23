import { z } from "zod";
import { BookSchema } from "../schemas/book.schema";

export type IBook = z.infer<typeof BookSchema>

let id = 0;

export const generateId = () => {
    id++
    return id;
}