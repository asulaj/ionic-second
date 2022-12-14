import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private AuthService: AuthService, private router: Router ) {}
  onLogout() {
    this.AuthService.logout();
    this.router.navigate(['/auth']);
  }
}
