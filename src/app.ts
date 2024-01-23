import express, { json } from "express";
import { routerBooks } from "./routers/books.routes";
import { HandleErrors } from "./Errors/handleErrors.middleware";
import helmet from "helmet";

export const app = express();

app.use(helmet());
app.use(json());
app.use("/books", routerBooks);
app.use(HandleErrors.execute);