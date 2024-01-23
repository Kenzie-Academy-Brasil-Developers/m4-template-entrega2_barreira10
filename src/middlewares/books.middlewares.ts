import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../Errors/errors";

export class IsBookIdValid {
    static execute(request: Request, response: Response, next: NextFunction) {
        const IsBookIdValid = booksDatabase.some(book => book.id === Number(request.params.id));

        if (!IsBookIdValid) {
            throw new AppError(404, "Book not found.");
        }
        return next();
    }
}

export class isBookNameValid {
    static execute(request: Request, response: Response, next: NextFunction) {
        const isBookNameValid = booksDatabase.some(book => book.name === request.body.name);

        if (isBookNameValid) {
            throw new AppError(409, "Book already registered.");
        }
        return next();
    }
}