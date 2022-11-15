import { Injectable } from '@angular/core';
import { Auth, authState, User as FireUser } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, switchMap, take, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  router: any;

  constructor(private afAuth: AngularFireAuth, private authService: AuthenticationService, private auth: Auth, private store: AngularFirestore) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{

      return authState(this.auth).pipe(map(user => (user)?true:false))

  }
}
