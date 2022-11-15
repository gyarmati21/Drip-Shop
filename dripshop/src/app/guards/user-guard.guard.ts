import { Injectable } from '@angular/core';
import { Auth, authState, User as FireUser } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, lastValueFrom, map, mergeAll, mergeMap, Observable, switchMap, take, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../shared/user.module';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private authService: AuthenticationService, private auth: Auth, private store: AngularFirestore) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return authState(this.auth).pipe(map(user => (user) ? true : false));
  }
}
