import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place
  constructor(private router: Router, private navCtrl: NavController, private placesService: PlacesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.places.find(p=> p.id === paramMap.get('placeId'))
    });
  }
  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover')

  }
}
