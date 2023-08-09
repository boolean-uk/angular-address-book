import { Component, OnInit } from '@angular/core';
import { Film, CreatedFilmsService } from '../film';

@Component({
  selector: 'app-contact-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmtListComponent implements OnInit{
  films: Film[] = [];

  constructor(public createdContactsService: CreatedFilmsService){}
  ngOnInit(): void {
    this.films = this.createdContactsService.getFilms();
  }

}
