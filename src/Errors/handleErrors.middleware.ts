import { Request, Response, NextFunction } from "express";
import { AppError } from "./errors";

export class HandleErrors {
    static execute(err: Error, request: Request, response: Response, next: NextFunction) {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({ error: err.message });
        }
        else {
            return response.status(500).json({ error: "Internal server error." });
        }
    }
}