import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  bookForm: FormGroup;
  bookService = inject(BookService);
  constructor(private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addBook() {
    const myBook = {
      id: this.bookService.books.length+1,
      firstName: this.bookForm.value.firstName,
      lastName: this.bookForm.value.lastName,
      city: this.bookForm.value.city,
    };
    this.bookService.addBook(myBook);
  }
}
