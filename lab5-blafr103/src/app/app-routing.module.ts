import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AddressListComponent} from './address-list/address-list.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'address-list', component: AddressListComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'password-forgot', component: PasswordForgotComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

