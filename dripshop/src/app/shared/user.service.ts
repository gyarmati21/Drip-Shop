import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FieldPath } from 'firebase/firestore';
import { User } from './user.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  formData: User;
  
  constructor(private afs : AngularFirestore, public auth : AngularFireAuth) { }

  getItems(order: string, direction: "asc" | "desc")
  {
    return this.afs.collection('user', ref => ref.orderBy(order, direction).limit(63)).snapshotChanges();
  }

  deleteItem(data : User)
  { 
    return new Promise<any>((resolve, reject) =>
    {
      this.afs.collection("user").doc(data.id).delete().then(res => {resolve(res)}, err => reject(err));
    });
  }

  updateItem(data : User)
  {
    return new Promise<any>((resolve, reject) =>
    {
      this.afs.collection("user").doc(data.id).update(data).then(res => {resolve(res)}, err => reject(err));
    });
  }
}
