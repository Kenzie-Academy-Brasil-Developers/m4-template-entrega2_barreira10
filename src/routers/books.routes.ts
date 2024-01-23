import { Router } from "express";
import { isBookNameValid, IsBookIdValid } from "../middlewares/books.middlewares";
import { BooksControllers } from "../controllers/books.controllers";
import { BookValidation } from "../middlewares/bookValidation.middlewares";
import { CreateBookSchema, UpdateBookSchema } from "../schemas/book.schema";

export const routerBooks = Router();

routerBooks.post("/", isBookNameValid.execute, BookValidation.execute({ body: CreateBookSchema }), BooksControllers.createBook);

routerBooks.get("/", BooksControllers.getBooks);

routerBooks.get("/:id", IsBookIdValid.execute, BooksControllers.getOneBook);

routerBooks.patch("/:id", IsBookIdValid.execute, isBookNameValid.execute, BookValidation.execute({ body: UpdateBookSchema }), BooksControllers.updateBook);

routerBooks.delete("/:id", IsBookIdValid.execute, BooksControllers.deleteBook);