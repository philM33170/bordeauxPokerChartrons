import { Injectable } from '@angular/core';
import { Administrateur } from '../model/administrateur';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  checkAdmin(admin: Administrateur): Observable<boolean> {
    return of();
  }
}
