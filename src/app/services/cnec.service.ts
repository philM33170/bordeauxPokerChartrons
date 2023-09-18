import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Club } from '../model/club';

@Injectable({
  providedIn: 'root',
})
export class CnecService {
  constructor(private afs: AngularFirestore) {}

  readClubsCnec() {
    return this.afs.collection<Club>('clubs', (element) =>
      element.orderBy('totalPts', 'desc')
    );
  }
}
