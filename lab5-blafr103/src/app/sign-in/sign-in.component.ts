import { Component } from '@angular/core';
import {AuthService} from '../authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  signIn(email: string, password: string): void {
    this.authService.signIn(email, password)
      .then(() => {
        this.router.navigate(['address-list']).then(() => {});
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  googleSignIn(): void {
    this.authService.googleAuth()
      .then((_) => {
        this.router.navigate(['address-list']).then(() => {});
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
