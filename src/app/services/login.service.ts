import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from '../model/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  afs = inject(AngularFirestore);
  afAuth = inject(AngularFireAuth);
  isAuthenticated: boolean = false;
  authSubject: Subject<boolean> = new Subject();
  constructor() {}

  getIsAuthenticated() {
    this.authSubject.next(this.isAuthenticated);
  }

  onLogout() {
    this.isAuthenticated = false;
    this.authSubject.next(this.isAuthenticated);
  }

  /*readAdministrateurs(): AngularFirestoreCollection<Administrateur> {
    return this.afs.collection<Administrateur>('administrateurs');
  }*/

  checkUser(user: User) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }
}
