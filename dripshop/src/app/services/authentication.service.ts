import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import * as firebase from 'firebase/compat';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';
import { CartItem } from '../shared/cart-item.module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  cartContent: Array<CartItem> = new Array;

  constructor(private auth: Auth) { }

  login(username: string, password: string){
    return from(
      signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(name: string, email: string, password: string){
    return from(
      createUserWithEmailAndPassword(this.auth, email, password))
    .pipe(switchMap(({ user }) => updateProfile(user, { displayName: name })));
  }

  logout(){

    return from(this.auth.signOut());
  }

  getUser(){
    return this.currentUser$;
  }
}
