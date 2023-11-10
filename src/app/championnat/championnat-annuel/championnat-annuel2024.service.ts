import { Injectable, inject } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Player } from 'src/app/model/player';

@Injectable({
  providedIn: 'root',
})
export class ChampionnatAnnuel2024Service {
  afs = inject(AngularFirestore);
  /**
   * @description Appel de la fonction readClassemenr().
   * @returns Renvoie le classement annuel du BPC sous la forme d'un Observable d'Array de Player.
   */
  getClassement(): Observable<Player[]> {
    return this.readClassement().valueChanges();
  }
  /**
   * @description Appel de la collection players2024 en BDD Firebase.
   * @returns Renvoie le classement annuel du BPC par ordre descendant de la propriété ptsAnnuel.
   */
  readClassement(): AngularFirestoreCollection<Player> {
    return this.afs.collection<Player>('players2024', (element) =>
      element.orderBy('ptsChampA', 'desc')
    );
  }
}
