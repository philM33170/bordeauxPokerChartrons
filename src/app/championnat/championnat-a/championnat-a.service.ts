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
export class ChampionnatAService {
  afs = inject(AngularFirestore);
  /**
   *
   * @returns Récupère et renvoie la Collection triée de tous les joueurs membre du BPC
   * sous la forme d'un Observable d'Array de Player en appelant la fonction readClassement()
   */
  getClassement(): Observable<Player[]> {
    return this.readClassement().valueChanges();
  }
  /**
   *
   * @returns Renvoie la liste de tous les joueurs de la Table players2024 en BDD Firebase
   * trié via le champ ptsChampA par ordre descendant
   */
  readClassement(): AngularFirestoreCollection<Player> {
    return this.afs.collection<Player>('players2024', (element) =>
      element.orderBy('ptsChampA', 'desc')
    );
  }
}
