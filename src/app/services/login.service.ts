import { Injectable } from '@angular/core';
import { Administrateur, administrateurs } from '../model/administrateur';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  checkAdmin(admin: Administrateur): Observable<Administrateur> {
    if (!administrateurs.some((v) => v.pseudo === admin.pseudo)) {
      return throwError(() => new Error('Pseudo inexistant !'));
    } else if (!administrateurs.some((v) => v.password === admin.password)) {
      return throwError(
        () => new Error("Vous n'avez pas saisi le bon mot de passe !")
      );
    }
    return of(admin);
  }
}
