import { Injectable, inject } from '@angular/core';
import { Player } from '../model/player';
import { classement2023 } from '../model/player';
import { Observable, filter, map, of } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ClassementAnnuel2023Service {
  afs = inject(AngularFirestore);
  constructor() {}

  getClassement(): Observable<Player[]> {
    //return of(classement2023);
    return this.readClassement().valueChanges();
  }

  getClassementCNIC(): Observable<Player[]> {
    //return of(classement2023.filter((player) => player.membre === true));
    return this.readClassement()
      .valueChanges()
      .pipe(
        map((classement) =>
          classement.filter((player) => player.membre === true)
        )
      );
  }

  readClassement(): AngularFirestoreCollection<Player> {
    return this.afs.collection<Player>('players', (element) =>
      element.orderBy('cnic2023', 'desc')
    );
  }
}
