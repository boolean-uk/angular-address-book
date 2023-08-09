import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreatedFilmsService {
  films: Film[] = [];
  constructor() {}

  addFilm(film: Film){
    this.films.push(film);
  }

  getFilms(){
    return this.films;
  }

}

export class Film {
  constructor(public id: number, public title: string | null, public year: string | null, public director: string | null, public stars: string | null, public review: string | null) {
  }
}
