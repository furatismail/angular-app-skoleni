import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsSharingService } from 'src/app/services/films-sharing/films-sharing.service';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit, AfterViewInit, DoCheck, OnDestroy {
  films!: any;
  selectedFilms: Array<Film> = [];
  finalPrice!: number;

  constructor(private filmsSharingService: FilmsSharingService, private filmsService: FilmsService) {
  }

  async ngOnInit() {
    const res = await this.filmsService.getFilms();
    this.films = res;
  }

  ngDoCheck() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {

  }

  onSelectFilm($event: Film) {
    this.selectedFilms.push($event);
    this.finalPrice = this.selectedFilms.reduce((prev, curr) => prev + curr.price, 0)
    this.filmsSharingService.changeData($event);
  }

}
