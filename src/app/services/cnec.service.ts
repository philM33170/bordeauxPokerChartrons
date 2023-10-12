import { Injectable, inject } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Club } from '../model/club';

@Injectable({
  providedIn: 'root',
})
export class CnecService {
  afs = inject(AngularFirestore);
  /**
   *
   * @returns Renvoie la liste de tous les clubs de la Table clubs en BDD Firebase par ordre descendant
   */
  readClubsCnec(): AngularFirestoreCollection<Club> {
    return this.afs.collection<Club>('clubs', (element) =>
      element.orderBy('totalPts', 'desc')
    );
  }
}
