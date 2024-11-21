import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  route = inject(ActivatedRoute);
  bookService = inject(BookService);

  id = this.route.snapshot.paramMap.get('id');
  
  book: Book | null = this.bookService.getBookById(Number(this.id));
}
