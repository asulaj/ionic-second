import { Place } from './../../place.model';
import { NavController } from '@ionic/angular';
import { PlacesService } from './../../places.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  form: FormGroup;
  place: Place;
  private placeSub: Subscription;
  constructor(private route: ActivatedRoute, private placesService: PlacesService, private navCtrl: NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
       this.placeSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place=>{
       this.place = place;
       this.form = new FormGroup({
         title: new FormControl(this.place.title, {
           updateOn: 'blur',
           validators: [Validators.required]
         }),
         description: new FormControl(this.place.description, {
           updateOn: 'blur',
           validators: [Validators.required, Validators.maxLength(255)]
         }),
       });
       })
    });
  }
  onUpdateOffer(){
    if (!this.form.valid) {
return;    }
console.log(this.form)
  }
  ngOnDestroy(): void {
      if(this.placeSub){
        this.placeSub.unsubscribe();
      }
  }

}
