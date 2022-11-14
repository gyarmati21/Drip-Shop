import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class User {
  public address : string;
  public email: string;
  public firstName: string;
  public UserlastName: string;
  public isAdmin: boolean;
  public phoneNumber: string;
}