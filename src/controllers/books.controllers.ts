import { Request, Response } from "express";
import { BooksServices } from "../services/book.services";

export class BooksControllers {
    static getBooks(request: Request, response: Response): Response {
        const search = request.query.search as string | undefined;
        const books = BooksServices.getBooks(search);
        return response.status(200).json(books);
    }

    static getOneBook(request: Request, response: Response): Response {
        return response.status(200).json(BooksServices.getOneBook(request.params.id));
    }

    static createBook(request: Request, response: Response): Response {
        const req = request.body;
        return response.status(201).json(BooksServices.createBook(req.name, req.pages, req.category));
    }

    static updateBook(request: Request, response: Response): Response {
        return response.status(200).json(BooksServices.updateBook(request.params.id, request.body));
    }

    static deleteBook(request: Request, response: Response): Response {
        return response.status(204).json(BooksServices.deleteBook(request.params.id));
    }
}