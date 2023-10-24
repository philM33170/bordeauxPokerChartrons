import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  afs = inject(AngularFirestore);
  afAuth = inject(AngularFireAuth);
  /**
   * @description Subject qui surveille l'état de connexion de l'utilisateur connecté.
   */
  currentUserSubject = new BehaviorSubject<User | null>(null);
  constructor() {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUserSubject.next(user);
    });
  }
  /**
   * @description Déconnecte l'utilisateur en appelant la fonction signOut() de Firebase
   * puis émet la valeur null au subject qui surveille l'état de connexion de l'utilisateur.
   * @returns Renvoie une Promise.
   */
  onLogout(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth.signOut().then(() => {
        this.currentUserSubject.next(null);
        resolve();
      });
    });
  }

  /**
   * @description Appel en BDD Firebase pour vérifier si l'utilisateur existe.
   * @param email string - email de l'utilisateur.
   * @param password string - mot de passe de l'utilisateur.
   * @returns Renvoie une Promise qui sera en succès si l'utilisateur existe en BDD.
   */
  /*checkUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }*/
  checkUser(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * @description Appel de la fonction sendPasswordResetEmail() de Firebase pour demander
   * l'envoi d'un mail de réinitialisation du mdp.
   * @param email string - email de l'utilisateur.
   * @returns Renvoie une Promise qui sera en succès si le mail de réinitialisation du mdp a été envoyé.
   */
  sendPasswordResetEmail(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(email).then(resolve).catch(reject);
    });
  }
}
