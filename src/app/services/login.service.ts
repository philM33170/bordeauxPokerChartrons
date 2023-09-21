import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  async checkUser(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }
}
