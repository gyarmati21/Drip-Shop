import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../shared/order.module'
import { AuthenticationService } from '../services/authentication.service';
import { User } from "../shared/user.module"


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router : Router, private userv: AuthenticationService) { }

  ngOnInit(): void {
  }
  
  userData = JSON.parse(localStorage.getItem("User") || "{email: '', isAdmin: false, address: '', firstName: '', lastName: '', phoneNumber: ''}");
  
  orderForm = new FormGroup({
    email: new FormControl(this.userData.email),
    address: new FormControl(this.userData.address),
    firstName: new FormControl(this.userData.firstName),
    lastName: new FormControl(this.userData.lastName),
    phone: new FormControl(this.userData.phoneNumber),
  });
	
  
  onSubmit() {
    this.router.navigateByUrl("");
  }
}
