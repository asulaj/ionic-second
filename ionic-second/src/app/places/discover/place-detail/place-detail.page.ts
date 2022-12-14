import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place
  private placeSub: Subscription
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
    )
    { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.placesService.getPlace(paramMap.get('placeId')).subscribe(place=>{
      this.place = place;
     })
    });
  }
  ngOnDestroy(): void {
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }
  onBookPlace() {
   // this.navCtrl.navigateBack('/places/tabs/discover')
   this.actionSheetCtrl.create({
    header: 'Choose an action',
    buttons: [
      {
        text: 'Select Date',
        handler: () => {
          this.openBookingModal('select')
        }
   },{
    text: 'Random Date',
    handler: () =>{
      this.openBookingModal('random')

    }
   },{
    text: 'Cancel',
    role: 'destructive'
   }]}).then(actionSheetEl => actionSheetEl.present());

  }
  openBookingModal(mode: 'select' | 'random'){
    console.log(mode)
    this.modalCtrl.create({component: CreateBookingComponent, componentProps:{selectedPlace: this.place, selectedMode: mode}}).then(modalEl=>{
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
