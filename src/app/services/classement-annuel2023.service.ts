import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { classement2023 } from '../model/player';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassementAnnuel2023Service {
  constructor() {}

  getClassement(): Observable<Player[]> {
    return of(classement2023);
  }

  getClassementCNIC(): Observable<Player[]> {
    return of(classement2023.filter((player) => player.membre === true));
  }
}
