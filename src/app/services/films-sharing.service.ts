import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Film } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsSharingService {

  private dataSource = new BehaviorSubject<Film | null>(null);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: Film) {
    this.dataSource.next(data);
  }
}
