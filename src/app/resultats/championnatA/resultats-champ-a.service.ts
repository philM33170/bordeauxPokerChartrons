import { Injectable, inject } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Participant } from 'src/app/model/participant';

@Injectable({
  providedIn: 'root',
})
export class ResultatsChampAService {
  afs = inject(AngularFirestore);

  constructor() {}
  readResultats(
    nom_du_tournoi: string
  ): AngularFirestoreCollection<Participant> {
    return this.afs.collection<Participant>(
      'resultats/champA/' + nom_du_tournoi,
      (element) => element.orderBy('position', 'asc')
    );
  }
}
