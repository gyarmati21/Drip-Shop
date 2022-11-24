import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { User } from '../shared/user.module';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-usermngmnt',
  templateUrl: './usermngmnt.component.html',
  styleUrls: ['./usermngmnt.component.scss']
})
export class UsermngmntComponent implements OnInit {

  constructor(public service : UserService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
    
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

  resetForm(form?: NgForm)
  {
    if(form != null)
    {
      form.resetForm();
    }
    this.service.formData = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      isAdmin: false
    };
    form?.form.markAsUntouched();
    form?.form.markAsPristine();
  }
  
  onSubmit(form : NgForm)
  {
    let data = form.value;
    form.form.markAsUntouched();

    if(form.value.email !== "")
    {
      this.service.updateItem(data)
      .then(() => {
        this.toastr.success("User updated successfully", "User update");
        this.resetForm();
      }).catch(err => {
        this.toastr.error(err, "Item update error");
      });
    }
  }

  onEdit(i: User)
  {
    this.service.formData = Object.assign({}, i);
  }

  onDelete(i : User)
  {
    if(confirm("Are you sure you want to remove this user?"))
    {
      this.service.deleteItem(i);
    }
  }
}
