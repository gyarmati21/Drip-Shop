import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthenticated implements CanActivate {

  constructor(private userv: AuthenticationService, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(this.userv.getUser());
      

      if (this.userv.getUser()) {
        console.log("logged in");
        return false // there is a user
        
      } else {
        console.log("logged out");
        return true;      // there is no user
      }
      
      
      
  }
  
}
