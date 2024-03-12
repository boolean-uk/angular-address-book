import { Injectable } from '@angular/core';
import { Book } from './book/models/book';
import { BOOKS } from './data/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private currentId: number = 1;
  public books: Book[] = BOOKS;

  public getBookById(id: number | null): Book | null {
    const book = this.books.find((book) => book.id === id)
    if (!book) {
      return null;
    }
    return book;
  }

  public getAllBooks(): Book[] {
    return this.books;
  }

  public addBook(book: Book) {
    this.books.push(book);
  }
    public updateBook(updateBook: Book) {
    this.books = this.books.map((book) =>
      book.id == updateBook.id ? updateBook : book
    );    
  }
}
