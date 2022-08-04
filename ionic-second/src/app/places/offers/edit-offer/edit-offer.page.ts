import { Place } from './../../place.model';
import { NavController } from '@ionic/angular';
import { PlacesService } from './../../places.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute, private placesService: PlacesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.places.find(p=> p.id === paramMap.get('placeId'))
    });
  }

}
