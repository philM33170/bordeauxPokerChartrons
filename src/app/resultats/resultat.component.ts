/*import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Resultats } from 'src/app/model/resultats';
import { ResultatsService } from './resultats.service';
import { Tournoi } from '../model/tournoi';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Participant } from '../model/participant';
import { Player } from '../model/player';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css'],
})
export class ResultatComponent implements OnInit {
  private readonly resultatService = inject(ResultatsService);
  tournois: Tournoi[] = [];
  resultat: Resultats[] = [];
  resultatsCollection: AngularFirestoreCollection<Tournoi> =
    this.resultatService.readResult();
  tournoisCollection: AngularFirestoreCollection<Participant> =
    this.resultatService.readResultats();
  resultats$: Observable<Participant[]> =
    this.tournoisCollection.valueChanges();
  result$: Observable<Tournoi[]> = this.resultatsCollection
    .valueChanges({
      idField: 'champA',
    })
    .pipe();
  ngOnInit(): void {
    this.resultatService.getResultats().subscribe({
      next: (data) => {
        console.log(data);

        this.tournois = data;
        console.log(this.tournois);

        for (let tournoi of this.tournois) {
          //console.log(tournoi.participants);
          //const tournois = resultat.tournois;
          //console.log(tournois);
          for (let tournoi of tournois) {
            this.tournois.push(tournoi);
          }
          const tab = resultat.tournois;
          const tab1 = this.tournois;
          this.tournois = tab.concat(tab1);
        }

        console.log(this.tournois.length);
      },
    });
    this.result$.subscribe({
      next: (data) => (this.resultat = data),
    });
    //this.getTournois();
    //this.getTournoi();
  }
  getTournois() {
    this.result$.subscribe({
      next: (data) => (this.tournois = data),
    });
    //console.log(this.resultatService.getResultats());
    console.log(this.tournois);
  }
  getTournoi() {}
}*/
