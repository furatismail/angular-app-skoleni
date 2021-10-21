import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {
  sub!: Subscription;

  filmGroup = new FormGroup({
    film: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
  }

  // DESTRUKTOR = { value, valid }: { value: Film, valid: boolean }
  // sem prijde nejaky payload --- logicky to je formGroup z formulare
  // vezmi payload a vytahni z nej property value a valid..
  // value je typu film (hodnoty formulare)
  // valid je typu boolean (zdali je formular validni)

  //UKAZKA VOLANI HTTP CLIENTA PRES PROMISE
  async submitAsync({ value, valid }: { value: Film, valid: boolean }) {
    const data = {
      ...value,
      createdAt: Date.now(),
      id: Date.now().toString()
    }
    const response = await this.filmsService.saveAsync(data);
    console.log(response)
  }


  //UKAZKA VOLANI HTTP CLIENTA PRES OBSERVABLE
  submit({ value, valid }: { value: Film, valid: boolean }) {
    const data = {
      ...value,
      createdAt: Date.now(),
      id: Date.now().toString()
    }
    this.sub = this.filmsService.save(data).subscribe(response => {
      console.log('OBSERVABLE POSLECH: ', response)
      if (response?.status == true) {
        alert('Film pridan')
        //vycisteni poli formulare
        this.filmGroup.reset()
      }
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
