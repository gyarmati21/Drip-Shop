import { SignupComponent } from './signup/signup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { AdminGuard } from './guards/admin-guard.guard';
import { UsermngmntComponent } from './usermngmnt/usermngmnt.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { UserGuard } from './guards/user-guard.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'sign-up', component:SignupComponent},
  {path: 'products', component:ProductsComponent, canActivate: [UserGuard] },
  {path: 'user-management', component:UsermngmntComponent, canActivate: [UserGuard] },
  {path: 'cart', component:CartComponent, canActivate: [UserGuard] }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AppRoutingModule { }
