import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsSharingService } from 'src/app/services/films-sharing.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films = [
    {
      "id": "1",
      "createdAt": 1602738296,
      "film": "film 1",
      "price": 68,
      "description": "relationships payment Handmade"
    },
    {
      "id": "2",
      "createdAt": 1602738236,
      "film": "film 2",
      "price": 45,
      "description": "Tasty Fresh Salad auxiliary vortals"
    },
    {
      "id": "3",
      "createdAt": 1623599675,
      "film": "film 3",
      "price": 23,
      "description": "grey"
    }
  ]
  selectedFilms: Array<Film> = [];
  finalPrice!: number;

  constructor(private filmsSharingService: FilmsSharingService) {
    console.log('CONSTRUCTOR')
  }

  ngOnInit() {
    console.log('init')
  }

  ngDoCheck() {
    console.log('run')
  }

  ngAfterViewInit() {
    console.log('After init')
  }

  ngOnDestroy() {

  }


  onSelectFilm($event: Film) {
    console.log('z filmsComponent:', $event);
    this.selectedFilms.push($event);
    this.finalPrice = this.selectedFilms.reduce((prev, curr) => prev + curr.price, 0)
    this.filmsSharingService.changeData($event);
  }

}
