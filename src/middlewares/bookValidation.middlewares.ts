import { NextFunction, Request, Response } from "express";
import { IRequestSchemas } from "../interfaces/zodSchema";
import { ZodError } from "zod";

export class BookValidation {
  static execute(schemas: Partial<IRequestSchemas>) {
    return async (request: Request, response: Response, next: NextFunction) => {
      try {

        if (schemas.params) {
          request.params = await schemas.params.parseAsync(request.params);
        }

        if (schemas.body) {
          request.body = await schemas.body.parseAsync(request.body);
        }

        if (schemas.query) {
          request.query = await schemas.query.parseAsync(request.query);
        }

        return next();
      } catch (error) {
        if (error instanceof ZodError) {
          return response.status(409).json(error);
        }
      }
    }
  }
}