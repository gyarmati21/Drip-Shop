import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { User } from '../shared/user.module';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-usermngmnt',
  templateUrl: './usermngmnt.component.html',
  styleUrls: ['./usermngmnt.component.scss']
})
export class UsermngmntComponent implements OnInit {

  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.service.getItems("email", "asc").subscribe(actionArray => {
      this.lista = actionArray.map(i =>{
        const data = i.payload.doc.data() as User
        return {
          address: data.address,
          email: data.email,
          firstName: data.firstName,
          isAdmin: data.isAdmin,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber
        } as unknown as User;
      })
    });
  }

  lista: User[];
}
