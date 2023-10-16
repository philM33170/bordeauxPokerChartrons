/*import { Injectable, inject } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Resultats } from '../model/resultats';
import { Observable, map, tap } from 'rxjs';
import { Tournoi } from '../model/tournoi';
import { Participant } from '../model/participant';

@Injectable({
  providedIn: 'root',
})
export class ResultatsService {
  afs = inject(AngularFirestore);
  resultats$!: Observable<Resultats[]>;
  resultats: Resultats[] = [];
  tournois: Tournoi[] = [];
  readResultats(): AngularFirestoreCollection<Participant> {
    return this.afs.collection<Participant>(
      'resultats/champA/main1',
      (element) => element.orderBy('position', 'asc')
    );
  }
  readResult(): AngularFirestoreCollection<Tournoi> {
    return this.afs.collection<Tournoi>('resultats');
  }
  getResultats(): Observable<Tournoi[]> {
    return this.readResult().valueChanges();
    /*.pipe(
        map((resultats: Resultats[]) =>
          resultats.flatMap((el) => {
            console.log('r' + el);

            this.resultats.push(el);
          })
        )
      );*/
//map((data) => (this.resultats = data))
/*map((resultats) =>
          resultats.map((resultat) => this.resultats.push(resultat))
        ),

    //();
    //return this.resultats;
  }
}*/
