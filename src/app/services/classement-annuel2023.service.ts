import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { classement2023 } from '../model/player';

@Injectable({
  providedIn: 'root',
})
export class ClassementAnnuel2023Service {
  classement: Player[] = [];

  constructor() {
    this.classement = classement2023;
  }
}
