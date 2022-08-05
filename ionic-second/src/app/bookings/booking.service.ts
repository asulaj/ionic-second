import { Injectable } from '@angular/core';

import { Booking } from './booking.model';
@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xzts',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc',
    },
    {
      id: 'asdf',
      placeId: 'p3',
      placeTitle: 'Aerial Mansion',
      guestNumber: 2,
      userId: 'cba',
    },
    {
      id: 'ferq',
      placeId: 'p2',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'ffa',
    },
    {
      id: 'ytqe',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'etr',
    },
  ];
  get bookings(){
    return this._bookings;
  }
}
