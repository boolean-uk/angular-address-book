import { Component, inject } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  bookService = inject(BookService);

  books: Book[] = this.bookService.getAllBooks();
}
