import { Injectable } from '@angular/core';
import {Author, Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books = [
    new Book(6131231234, 'ebassi@sbcglobal.net', 'Evan', 'Bassi'),
    new Book(9119119191, 'malattia@icloud.com', 'Erika', 'Lattia'),
    new Book(6005001818, 'bjoern@outlook.com', 'Bjorn', 'Joern'),
    new Book(1111111111, 'thrymm@live.com', 'Tyre', 'Rymm'),
    new Book(1234567890, 'balchen@mac.com', 'Ballen', 'Chen')
  ];

  constructor() {}

  public getBook(id: string): Book {
    // tslint:disable-next-line:radix
    return <Book>this.books.find(book => book.id === Number.parseInt(id));
  }

  public addBook(b: Book): void {
    this.books.push(b);
  }
}
