import { booksDatabase } from "../database/database";
import { IBook, generateId } from "../interfaces/booksDataBase.interface";

export class BooksServices {
    static getBooks(query?: string | undefined) {
        if (query) {
            return booksDatabase.filter(book => book.name.toLowerCase().includes(query.toLowerCase()));
        }
        return booksDatabase;
    }

    static getOneBook(id: string) {
        const findBook = booksDatabase.find(product => product.id === Number(id));
        return findBook;
    }

    static createBook(name: string, pages: string, category?: string) {
        const newBook: IBook = {
            id: generateId(),
            name: name,
            pages: Number(pages),
            category: category,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        booksDatabase.push(newBook);
        return newBook;
    }

    static updateBook(id: string, body?: IBook) {
        const index = booksDatabase.findIndex((book) => book.id === Number(id));

        const newBook: IBook = {
            ...booksDatabase[index],
            ...body,
            updatedAt: new Date()
        }

        booksDatabase.splice(index, 1, newBook)
        return newBook;
    }

    static deleteBook(id: string) {
        const index = booksDatabase.findIndex((book) => book.id === Number(id));
        return booksDatabase.splice(index, 1);
    }
}