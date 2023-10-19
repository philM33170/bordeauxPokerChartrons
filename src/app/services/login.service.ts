import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  afs = inject(AngularFirestore);
  afAuth = inject(AngularFireAuth);

  /**
   * @description Subject booleen qui émet true si l'utilisateur est connecté.
   */
  authSubject: Subject<boolean> = new BehaviorSubject(false);

  /**
   * @description Déconnecte l'utilisateur, appel le subject pour émettre false.
   */
  onLogout(): void {
    this.authSubject.next(false);
  }

  /**
   * @description Appel en BDD Firebase pour vérifier si l'utilisateur existe.
   * @param email string - email de l'utilisateur.
   * @param password string - mot de passe de l'utilisateur.
   * @returns Renvoie une Promise qui sera en succès si l'utilisateur existe en BDD.
   */
  async checkUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
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
