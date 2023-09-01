import { Component } from '@angular/core';
import { BookRepository } from './repository.model';
import { Book } from './book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  model:BookRepository = new BookRepository();
  books = this.model.getBooks();
  addBook(){
    this.model.addBook(new Book(4, 'Node', 'Ryan Dahl', 400));
  }
  deleteBook(book:Book){
    this.model.deleteBook(book);
  }
  updatePrice(book:Book){
    book.price = 35;
  }
  updateName(book:Book){
    book.name = "UPDATE NAME";
  }
}
