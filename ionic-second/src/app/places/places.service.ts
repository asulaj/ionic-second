import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
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
  ];
  get places() {
    return [...this._places];
  }
  constructor(private authService: AuthService) {}

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
    this._places.push(newPlace);
  }
}
