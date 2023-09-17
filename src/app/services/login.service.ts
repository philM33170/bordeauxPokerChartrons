import { Injectable } from '@angular/core';
import { Administrateur, administrateurs } from '../model/administrateur';
import { Observable, Subject, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAuthenticated: boolean = false;

  authSubject: Subject<boolean> = new Subject();
  constructor() {}

  checkAdmin(admin: Administrateur): Observable<Administrateur> {
    if (!administrateurs.some((v) => v.pseudo === admin.pseudo)) {
      this.isAuthenticated = false;
      return throwError(() => new Error('Pseudo inexistant !'));
    } else if (!administrateurs.some((v) => v.password === admin.password)) {
      this.isAuthenticated = false;
      return throwError(() => new Error('Mot de passe erroné !'));
    }
    this.isAuthenticated = true;
    return of(admin);
  }

  getIsAuthenticated() {
    this.authSubject.next(this.isAuthenticated);
  }
}
