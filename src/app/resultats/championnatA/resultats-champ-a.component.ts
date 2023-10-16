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
  title: string = 'Résultats du Championnat A - saison 2023-2024';
  private readonly resultatService = inject(ResultatsChampAService);
  resultatsMain1$: Observable<Participant[]> = this.resultatService
    .readResultats('main1')
    .valueChanges();
  resultatsSide1$: Observable<Participant[]> = this.resultatService
    .readResultats('side1')
    .valueChanges();
  resultatsMain2$: Observable<Participant[]> = this.resultatService
    .readResultats('main2')
    .valueChanges();
  resultatsSide2$: Observable<Participant[]> = this.resultatService
    .readResultats('side2')
    .valueChanges();
  resultatsMain3$: Observable<Participant[]> = this.resultatService
    .readResultats('main3')
    .valueChanges();
  resultatsSide3$: Observable<Participant[]> = this.resultatService
    .readResultats('side3')
    .valueChanges();
}
