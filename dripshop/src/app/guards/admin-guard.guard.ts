import { Injectable } from '@angular/core';
import { Auth, authState, User as FireUser } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, switchMap, take, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../shared/user.module';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  router: any;

  constructor(private afAuth: AngularFireAuth, private authService: AuthenticationService, private auth: Auth, private store: AngularFirestore) { }

  user: User;
  userId: string;
  admin: boolean;

  
  isAdmin(id : string | undefined){
    this.store.collection("user").doc(id).ref.get().then(
      function (doc) {
        if (doc.exists) return (doc.data() as User).isAdmin;
        else return false;
        
      }
    )
  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{


      // is logged in
      return authState(this.auth).pipe(map(user => (user)?true:false))

      // return new Promise<boolean>((resolve, reject) => {
      //   authState(this.auth).pipe(
      //     tap(user => console.log(user)),
      //     tap(user => (user)? resolve(true) : reject(false))
      //   )
        
        
      // })

      // return this.afAuth.currentUser.then( user => {
      //   if (user) return true;
      //   else return false;
      // });


      authState(this.auth).subscribe(user => {
        this.store.collection("user").doc(user?.uid).ref.get().then(
          function (doc) {
            if (doc.exists) return (doc.data() as User).isAdmin;
            else return false;
            
          }
        )
        if(user) this.userId = user.uid;
        console.log(this.userId);
        console.log(this.isAdmin(this.userId));
        
        
        
        
        // this.isAdmin(this.userId).subscribe(id => console.log(id));
      })
      // return true;

      // return this.isAdmin(this.auth.currentUser?.uid).pipe(map(this.isAdmin => {
      //   if (isAdmin) return true;
      //   return false;
      // }))



    //   return new Promise((resolve, reject) => {
    //     authState(this.auth).subscribe(user => {
    //       if (user) {
    //         this.db.collection("user").doc(user.uid).ref.get().then((doc: any) => {
    //           if (!doc.exists) return resolve(of(false));
    //           else {
    //             return resolve(of(doc.get("isAdmin")));
    //           }
    //         })
    //       }
    //       return false;
    //     })
    //   });
    // }
    }
  }
