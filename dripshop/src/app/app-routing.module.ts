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
import {MatInputModule} from '@angular/material/input';
import { IsNotAuthenticated } from './shared/auth.guard';

const routes: Routes = [
  
  { path: 'home', component:HomeComponent },
  { path: 'sign-up', component:SignupComponent, canActivate: [IsNotAuthenticated] },
  { path: 'login', component:LoginComponent, canActivate: [IsNotAuthenticated] },
  
  { path: '', pathMatch: 'full', redirectTo: "/home" }, // works


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
  providers: [IsNotAuthenticated]
})
export class AppRoutingModule { }
