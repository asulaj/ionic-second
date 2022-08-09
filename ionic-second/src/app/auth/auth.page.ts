import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading: boolean;
  isLogin: boolean= true;
  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.authService.login()
  }
  onLogin() {
    this.authService.login();
    this.loadingCtrl.create({ duration: 1000, keyboardClose: true, message: 'Login successful' }).then(loadingEl => {
      loadingEl.present();
      setTimeout((() => { this.isLoading = false; this.router.navigate(['/places/tabs/discover']); this.loadingCtrl.dismiss() }), 1000);
    });
    this.isLoading = true;
  }
  onSubmit(form: NgForm) {  
    if(!form.valid){
      return;
    }
    
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);
    if(this.isLogin){
      // send a requesto to login servers
    } else {
      // send a request to signup to the server
    }
  }
  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }

}
