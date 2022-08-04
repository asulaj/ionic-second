import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of New York City', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/260px-Above_Gotham.jpg', 155),
    new Place('p2', 'Brooklyn Mansion', 'In the heart of New York City', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/260px-Above_Gotham.jpg', 255),
    new Place('p3', 'Psycho Brooklyn Mansion', 'In the heart of New York City', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/260px-Above_Gotham.jpg', 399),
  ]
  get places(){
    return [...this._places]
  }
  constructor() { }
}
