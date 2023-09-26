import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from '../model/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  afAuth = inject(AngularFireAuth);
  afs = inject(AngularFirestore);
  result?: User | firebase.auth.UserCredential;

  /**
   *
   * @param email string - email de l'utilisateur
   * @param password string - mot de passe de l'utilisateur
   * @param name string - nom de l'utilisateur
   * @returns
   */
  async register(
    email: string,
    password: string,
    name: string
  ): Promise<firebase.auth.UserCredential> {
    this.result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    const newUser: User = {
      email,
      name,
      createdAt: new Date(),
      role: 'adhérent',
    };
    await this.afs.collection<User>('users').add(newUser);

    return this.result;
  }
}
