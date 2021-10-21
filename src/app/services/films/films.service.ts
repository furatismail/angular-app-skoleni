import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

  // sluzbu volame asynchronně jako Promise
  saveAsync(payload: Film): Promise<{ status: boolean }> {
    return this.httpClient.post<{ status: boolean }>('https://5ed74760152c310016d84d62.mockapi.io/api/films', payload).toPromise();
  }

  // sluzbu volame jako observable nasledne musime poslouchat pres subscrube
  save(payload: Film): Observable<{ status: boolean }> {
    return this.httpClient.post<{ status: boolean }>('https://5ed74760152c310016d84d62.mockapi.io/api/films', payload);
  }

  getFilms(): Promise<Array<Film>> {
    return this.httpClient.get<Array<Film>>('https://5ed74760152c310016d84d62.mockapi.io/api/films').toPromise();
  }
}
