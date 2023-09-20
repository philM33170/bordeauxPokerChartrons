import { Injectable, inject } from '@angular/core';
import { Administrateur, administrateurs } from '../model/administrateur';
import { Observable, from, of, throwError } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  afAuth = inject(AngularFireAuth);
  //result?: firebase.auth.UserCredential;
  /*createAdmin(admin: Administrateur): Observable<boolean> {
    if (
      administrateurs.some(
        (v) => v.pseudo.toLowerCase() === admin.pseudo.toLowerCase()
      )
    ) {
      return of(false);
    }
    administrateurs.push(admin);
    return of(true);
  }*/

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
