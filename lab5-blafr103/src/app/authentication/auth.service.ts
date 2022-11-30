import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUser: firebase.User | null = null;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  get user(): Observable<firebase.User | null> {
    return this.afAuth.user;
  }

  get userid(): string {
    if (this.loggedUser) return this.loggedUser.uid;
    return '';
  }

  signIn(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((credential) => {
        this.loggedUser = credential.user;
      });
  }

  signUp(email: string, password: string, name: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        const user = credential.user;
        this.loggedUser = credential.user; // shouldn't be null...
        if (user) {
          user.updateProfile({displayName: name}).then(_ => {});
        }
      });
  }

  passwordReset(passwordResetEmail: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  googleAuth(): Promise<void | firebase.auth.UserCredential> {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((credential) => {
        this.loggedUser = credential.user;
      });
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut()
      .then((_) => {
        this.loggedUser = null;
      });
  }
}


