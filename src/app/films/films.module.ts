import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './containers/films/films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { FilmFormComponent } from './containers/film-form/film-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//localhost:4200/films
const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'new', component: FilmFormComponent },
]

@NgModule({
  declarations: [
    FilmsComponent,
    FilmItemComponent,
    FilmFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FilmsComponent
  ]
})
export class FilmsModule { }
