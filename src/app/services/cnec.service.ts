import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Club } from '../model/club';

@Injectable({
  providedIn: 'root',
})
export class CnecService {
  afs = inject(AngularFirestore);
  constructor() {}

  readClubsCnec() {
    return this.afs.collection<Club>('clubs', (element) =>
      element.orderBy('totalPts', 'desc')
    );
  }
}
