import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Film, CreatedFilmsService } from '../film';
import { whiteSpacesValidator } from 'src/validators/whiteSpacesValidator';


@Component({
  selector: 'app-root',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private createdFilms: CreatedFilmsService
  ) {}

  userForm = this.fb.group({
    title: [
      '',
      //[Validators.required, Validators.minLength(3), whiteSpacesValidator],
    ],
    year: [
      '',
      //[Validators.required, Validators.minLength(4), whiteSpacesValidator],
    ],
    director: ['', ],
    stars: ['', ],
    review: ['', ],
  });

  ngOnInit(): void {}

  submit(event: Event) {
    this.createdFilms.addFilm(
      new Film(
        this.createdFilms.films.length + 1,
        this.userForm.controls.title.value,
        this.userForm.controls.year.value,
        this.userForm.controls.director.value,
        this.userForm.controls.stars.value,
        this.userForm.controls.review.value
      )
    );
    this.userForm.reset();
  }
}
