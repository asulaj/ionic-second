import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, SegmentChangeEventDetail } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  private placesSub: Subscription;
  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
   this.placesSub = this.placesService.places.subscribe(places=>this.loadedPlaces = places);
  }
  ngOnDestroy(): void {
      if(this.placesSub){
        this.placesSub.unsubscribe();
      }
  }
  // onOpenMenu(){
  //   this.menuCtrl.close();
  // }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail)
  }
}
