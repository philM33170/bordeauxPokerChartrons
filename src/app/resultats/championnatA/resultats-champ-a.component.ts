import { Component, inject } from '@angular/core';
import { ResultatsChampAService } from './resultats-champ-a.service';
import { Participant } from 'src/app/model/participant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultats-champ-a',
  templateUrl: './resultats-champ-a.component.html',
  styleUrls: ['./resultats-champ-a.component.css'],
})
export class ResultatsChampAComponent {
  title: string = 'Résultats du Championnat A';
  private readonly resultatService = inject(ResultatsChampAService);

  /**
   * @description Observable qui représente le classement du tournoi main1 du championnat A.
   */
  resultatsMain1$: Observable<Participant[]> = this.resultatService
    .readResultats('main1')
    .valueChanges();

  /**
   * @description Observable qui représente le classement du tournoi side1 du championnat A.
   */
  resultatsSide1$: Observable<Participant[]> = this.resultatService
    .readResultats('side1')
    .valueChanges();

  /**
   * @description Observable qui représente le classement du tournoi main2 du championnat A.
   */
  resultatsMain2$: Observable<Participant[]> = this.resultatService
    .readResultats('main2')
    .valueChanges();

  /**
   * @description Observable qui représente le classement du tournoi side2 du championnat A.
   */
  resultatsSide2$: Observable<Participant[]> = this.resultatService
    .readResultats('side2')
    .valueChanges();

  /**
   * @description Observable qui représente le classement du tournoi main3 du championnat A.
   */
  resultatsMain3$: Observable<Participant[]> = this.resultatService
    .readResultats('main3')
    .valueChanges();

  /**
   * @description Observable qui représente le classement du tournoi side3 du championnat A.
   */
  resultatsSide3$: Observable<Participant[]> = this.resultatService
    .readResultats('side3')
    .valueChanges();

  /**
   * @description Observable qui représente le classement du tournoi main4 du championnat A.
   */
  resultatsMain4$: Observable<Participant[]> = this.resultatService
    .readResultats('main4')
    .valueChanges();

  /**
   * @description Observable qui représente le classement du tournoi side4 du championnat A.
   */
  resultatsSide4$: Observable<Participant[]> = this.resultatService
    .readResultats('side4')
    .valueChanges();
}
