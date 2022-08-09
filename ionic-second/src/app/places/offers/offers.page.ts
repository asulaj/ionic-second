import { PlacesService } from './../places.service';
import { Place } from './../place.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Place[];
  private placeSub: Subscription;
  constructor(private placesService: PlacesService) {}

  ngOnInit() {
   this.placeSub = this.placesService.places.subscribe(places=>{
      this.offers = places;
    });
  }
  ngOnDestroy(): void {
    if(this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
  onEdit(offerId: string) {
    console.log(offerId);
  }
}
