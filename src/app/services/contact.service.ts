import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  afs = inject(AngularFirestore);
  /**
   *
   * @returns Renvoie la liste de tous les membres du bureau du BPC de la Table contacts en BDD Firebase par ordre ascendant du poste occupé
   */
  readContacts() {
    return this.afs.collection<Contact>('contacts', (element) =>
      element.orderBy('poste', 'asc')
    );
  }
}
