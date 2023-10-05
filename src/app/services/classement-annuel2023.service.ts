import { Injectable, inject } from '@angular/core';
import { Player } from '../model/player';
import { Observable, filter, map } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ClassementAnnuel2023Service {
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
   * @returns Récupère et renvoie la Collection triée des Joueurs qui sont éligible CNIC
   * sous la forme d'un Observable d'Array de Player en appelant la fonction readClassement()
   */
  getClassementCNIC(): Observable<Player[]> {
    return this.readClassement()
      .valueChanges()
      .pipe(
        map((classement) =>
          classement.filter((player) => player.membre === true)
        )
      );
  }

  /**
   *
   * @returns Renvoie la liste de tous les joueurs de la Table players en BDD Firebase par ordre descendant
   */
  readClassement(): AngularFirestoreCollection<Player> {
    return this.afs.collection<Player>('players', (element) =>
      element.orderBy('cnic2023', 'desc')
    );
  }
}
