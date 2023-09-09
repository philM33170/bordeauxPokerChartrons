import { Injectable } from '@angular/core';
import { Administrateur, administrateurs } from '../model/administrateur';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  createAdmin(admin: Administrateur): Observable<boolean> {
    if (
      administrateurs.some(
        (v) => v.pseudo.toLowerCase() === admin.pseudo.toLowerCase()
      )
    ) {
      return of(false);
    }
    administrateurs.push(admin);
    return of(true);
  }
}
