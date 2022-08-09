import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from './../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap,delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/260px-Above_Gotham.jpg',
      155,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'fwq'
    ),
    new Place(
      'p2',
      'Brooklyn Mansion',
      'In the heart of New York City',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/260px-Above_Gotham.jpg',
      255,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      '453'
    ),
    new Place(
      'p3',
      'Psycho Brooklyn Mansion',
      'In the heart of New York City',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/260px-Above_Gotham.jpg',
      399,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      '555'
    ),
  ]);
  get places() {
    return this._places.asObservable();
  }
  constructor(private authService: AuthService) {}

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map((places) => {
        return { ...places.find((place) => place.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/260px-Above_Gotham.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
          this._places.next(places.concat(newPlace));
      })
    ); // prende l'array intero con take 1, poi gli aggiunge a seguire un nuovo oggetto
  }
}
