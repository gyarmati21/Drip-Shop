import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// FireStore module (Database)
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { SignupComponent } from './signup/signup.component';
import { UsermngmntComponent } from './usermngmnt/usermngmnt.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { ProductAdminComponent } from './shared/product-admin/product-admin.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { OrderComponent } from './order/order.component';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UsermngmntComponent,
    CartComponent,
    AppComponent,
    ProductAdminComponent,
    ProductDialogComponent,
    ProductsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HotToastModule.forRoot(),
    MatChipsModule,
    MatButtonToggleModule,
    MatDialogModule,
    CommonModule,
    ToastrModule.forRoot(),
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
