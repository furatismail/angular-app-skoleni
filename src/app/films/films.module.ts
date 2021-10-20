import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './containers/films/films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';

@NgModule({
  declarations: [
    FilmsComponent,
    FilmItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmsComponent
  ]
})
export class FilmsModule { }
