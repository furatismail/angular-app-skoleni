import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsSharingService } from 'src/app/services/films-sharing.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<Film> = [];

  constructor(private filmsSharingService: FilmsSharingService) { }

  ngOnInit(): void {
    this.filmsSharingService.currentData.subscribe(data => {
      console.log(data);
      this.cart.push(data as Film);
    })
  }

}
