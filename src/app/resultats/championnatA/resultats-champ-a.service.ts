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

  /**
   * @description Appel de la BDD Firebase afin de récupérer la collection correspondant au tournoi souhaité.
   * @param string - nom du tournoi.
   * @returns Renvoie le classement du tournoi donnée en paramètre par ordre ascendant de la propriété position.
   */
  readResultats(
    nom_du_tournoi: string
  ): AngularFirestoreCollection<Participant> {
    return this.afs.collection<Participant>(
      'resultats/champA/' + nom_du_tournoi,
      (element) => element.orderBy('position', 'asc')
    );
  }
}
