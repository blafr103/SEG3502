import { Component } from '@angular/core';
import {AuthService} from '../authentication/auth.service';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.css']
})
export class PasswordForgotComponent {
  constructor(private authService: AuthService) {
  }

  passwordReset(email: string): void {
    this.authService.passwordReset(email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error: any) => {
      window.alert(error);
    });
  }
}
