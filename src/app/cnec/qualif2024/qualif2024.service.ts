import { Injectable, inject } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Club } from 'src/app/model/club';

@Injectable({
  providedIn: 'root',
})
export class Qualif2024Service {
  afs = inject(AngularFirestore);
  /**
   * @description Appel de la BDD Firebase afin de récupérer le classement de la poule C CNEC 2024.
   * @returns Renvoie la liste des clubs de la Table cnec2024PouleC en BDD Firebase par ordre descendant de la propriété totalPts.
   */
  readClubsCnecRegionale(): AngularFirestoreCollection<Club> {
    return this.afs.collection<Club>('cnec2024PouleC', (element) =>
      element.orderBy('totalPts', 'desc')
    );
  }
}
