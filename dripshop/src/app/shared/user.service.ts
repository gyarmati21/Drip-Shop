import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FieldPath } from 'firebase/firestore';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private afs : AngularFirestore) { }

  getItems(order: string, direction: "asc" | "desc")
  {
    return this.afs.collection('user', ref => ref.orderBy(order, direction).limit(63)).snapshotChanges();
  }
}
