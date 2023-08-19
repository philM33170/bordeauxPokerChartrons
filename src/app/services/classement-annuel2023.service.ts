import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassementAnnuel2023Service {
  classement: Player[] = [];

  constructor(private httpClient: HttpClient) {}
}
