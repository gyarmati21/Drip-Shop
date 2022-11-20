import { Injectable } from '@angular/core';
import { Auth, authState, User as FireUser, user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, filter, flatMap, map, Observable, of, skip, switchMap, take, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../shared/user.module';
import * as firebase from 'firebase/compat';
import { isAdmin } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  router: any;

  constructor(private afAuth: AngularFireAuth, private authService: AuthenticationService, private auth: Auth, private store: AngularFirestore) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{

      return authState(this.auth).pipe(
        map(user => user?.uid), 
        map(uid => (uid) ? this.store.collection<User>("user").doc(String(uid)).get() : null),
        switchMap(user => (user) ? user.pipe(
          map(snapshot => (snapshot.data()?.isAdmin) ? true : false)) : of(false)
        ),
      );
 
  }
}
