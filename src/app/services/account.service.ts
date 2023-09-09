import { Injectable } from '@angular/core';
import { Administrateur } from '../model/administrateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  createAdmin(admin: Administrateur) {
    return new Observable();
  }
}
