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
  /**
   * @description Variable booleen qui vaut true si l'utilisateur est connecté.
   */
  isAuthenticated: boolean = false;
  authSubject: Subject<boolean> = new Subject();
  constructor() {}
  /**
   * @description Vérifie si l'utilisateur est connecté.
   */
  getIsAuthenticated() {
    this.authSubject.next(this.isAuthenticated);
  }

  /**
   * @description Déconnecte l'utilisateur.
   */
  onLogout(): void {
    this.isAuthenticated = false;
    this.authSubject.next(this.isAuthenticated);
  }

  /**
   * @description Appel en BDD Firebase pour vérifier si l'utilisateur existe.
   * @param email string - email de l'utilisateur.
   * @param password string - mot de passe de l'utilisateur.
   * @returns Renvoie une Promise qui sera en succès si l'utilisateur existe en BDD.
   */
  async checkUser(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }
}
