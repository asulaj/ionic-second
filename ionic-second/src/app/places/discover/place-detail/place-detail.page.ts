import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController)
    { }

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
   // this.navCtrl.navigateBack('/places/tabs/discover')
    this.modalCtrl.create({component: CreateBookingComponent, componentProps:{selectedPlace: this.place}}).then(modalEl=>{
      modalEl.present();
      return modalEl.onDidDismiss()
    }).then(resultData =>{
      console.log(resultData.data, resultData.role)
      if(resultData.role === 'confirmed'){
        console.log('Confirmed place');
      }
    })
  }
}
