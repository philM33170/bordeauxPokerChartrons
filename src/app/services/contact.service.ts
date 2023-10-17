import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  afs = inject(AngularFirestore);
  /**
   * @description Appel de la collection contacts en BDD Firebase.
   * @returns Renvoie la liste de tous les membres du bureau du BPC par ordre ascendant de la propriété poste.
   */
  readContacts() {
    return this.afs.collection<Contact>('contacts', (element) =>
      element.orderBy('poste', 'asc')
    );
  }
}
