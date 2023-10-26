import { Injectable, inject } from '@angular/core';
import { Player } from '../model/player';
import { Observable, map } from 'rxjs';
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
   * @description Appel de la fonction readClassement().
   * @returns Renvoie la Collection triée de tous les joueurs membre du BPC
   * sous la forme d'un Observable d'Array de Player.
   */
  getClassement(): Observable<Player[]> {
    return this.readClassement().valueChanges();
  }

  /**
   * @description Appel de la fonction getClassement().
   * @returns Renvoie la Collection triée des Joueurs qui sont éligible CNIC
   * sous la forme d'un Observable d'Array de Player.
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
   * @description Appel de la collection players de la BDD Firebase.
   * @returns Renvoie la liste de tous les joueurs par ordre descendant de la propriété cnic2023.
   */
  readClassement(): AngularFirestoreCollection<Player> {
    return this.afs.collection<Player>('players', (element) =>
      element.orderBy('cnic2023', 'desc')
    );
  }
}
