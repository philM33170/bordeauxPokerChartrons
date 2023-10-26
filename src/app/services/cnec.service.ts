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
   * @description Appel de la BDD Firebase afin de récupérer le classement de la finale régionale CNEC 2023.
   * @returns Renvoie la liste des clubs de la Table clubs en BDD Firebase par ordre descendant de la propriété totalPts.
   */
  readClubsCnecRegionale(): AngularFirestoreCollection<Club> {
    return this.afs.collection<Club>('clubs', (element) =>
      element.orderBy('totalPts', 'desc')
    );
  }

  /**
   * @description Appel de la BDD Firebase afin de récupérer le classement de la finale nationale CNEC 2023.
   * @returns Renvoie la liste des clubs de la Table finaleCNEC2023 par ordre descendant de la propriété totalPts.
   */
  readClubsCnecNationale() {
    return this.afs.collection<Club>('finaleCNEC2023', (element) =>
      element.orderBy('totalPts', 'desc')
    );
  }
}
