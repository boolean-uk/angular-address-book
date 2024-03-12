import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
route = inject(ActivatedRoute);
  bookService = inject(BookService);
  router = inject(Router);
  bookForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  book: Book | null = this.bookService.getBookById(Number(this.id));

  constructor(private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      firstName: [this.book?.firstName, Validators.required],
      lastName: [this.book?.lastName, Validators.required],
      city: [this.book?.city, Validators.required],
    });
  }

  updateCar() {
    this.bookService.updateBook({
      id: Number(this.id),
      firstName: this.bookForm.value.firstName,
      lastName: this.bookForm.value.lastName,
      city: this.bookForm.value.city,
    });
    this.router.navigate(['book']);
  }
}
