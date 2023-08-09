import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmtListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmtListComponent,
  },
  {
    path: 'films/:id',
    component: FilmComponent,
  },
  {
    path: 'newFilm',
    component: FilmsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
