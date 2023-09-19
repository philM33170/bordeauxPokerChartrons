import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  afs = inject(AngularFirestore);
  readContacts() {
    return this.afs.collection<Contact>('contacts', (element) =>
      element.orderBy('poste', 'asc')
    );
  }
}
