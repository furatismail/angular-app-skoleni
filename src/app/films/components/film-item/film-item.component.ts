import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem!: Film;
  @Output() selectFilmItem = new EventEmitter<Film>()

  constructor() {
  }

  ngOnInit(): void {
  }

  selectFilm(item: Film): void {
    this.selectFilmItem.emit(item);
  }

}
