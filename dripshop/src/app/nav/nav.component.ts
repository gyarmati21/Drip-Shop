import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { UserGuard } from '../guards/user-guard.guard';
import { AdminGuard } from '../guards/admin-guard.guard';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [CartComponent]
})
export class NavComponent {

  user$ = this.authService.currentUser$;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,
      public authService: AuthenticationService,
      private router: Router,
      private cartcomp: CartComponent,
      private authservice: AuthenticationService) {}

    canUserActive() {
      console.log(this.user$);
      return true;
    }

    canAdminActive() {
      return false;
    }
    
      logout(){
        this.cartcomp.emptyCart();
        this.authService.logout().subscribe(() => {
          this.router.navigate(['']);
        });
      }
}

