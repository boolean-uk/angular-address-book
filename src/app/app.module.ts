import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FilmsComponent } from './films/films.component';
import { FilmtListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [AppComponent, FilmsComponent, FilmtListComponent, FilmComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
