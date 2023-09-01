import { Book } from "./book.model";

export class dataSource {
  private books: Book[]
  constructor() {
    this.books = new Array<Book>(
      new Book(1, 'Angular', 'Google', 100),
      new Book(2, 'React', 'Facebook', 200),
      new Book(3, 'Vue', 'Evan You', 300),
    )}
    getBooks(): Book[] {
      return this.books;
    }

}