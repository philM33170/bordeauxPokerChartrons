import { Component, inject } from '@angular/core';
import { Player } from '../model/player';
import { ClassementAnnuel2023Service } from 'src/app/services/classement-annuel2023.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cnic',
  templateUrl: './cnic.component.html',
  styleUrls: ['./cnic.component.css'],
})
export class CnicComponent {
  private readonly classementService = inject(ClassementAnnuel2023Service);
  /**
   * @description Représente le classement annuel de la saison 2023 du BPC éligible pour le CNIC 2024.
   */
  players$: Observable<Player[]> = this.classementService.getClassementCNIC();
}
