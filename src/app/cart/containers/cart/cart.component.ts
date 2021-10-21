import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsSharingService } from 'src/app/services/films-sharing/films-sharing.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<Film> = [];
  sub!: Subscription

  constructor(private filmsSharingService: FilmsSharingService) { }

  ngOnInit(): void {
    //pozor ted se nam do promenne cart uklada posledni pridany film.
    //pokud bychom chteli ukladat vsechny musime v behavior subjectu prepsat promennou data na pole
    this.sub = this.filmsSharingService.currentData.subscribe(data => {
      console.log(data)
      if (data) {
        this.cart.push(data as Film);
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
