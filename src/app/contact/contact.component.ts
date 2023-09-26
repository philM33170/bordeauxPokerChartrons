import { Component, inject } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactService = inject(ContactService);
  contactsCollection: AngularFirestoreCollection<Contact> =
    this.contactService.readContacts();
  contacts$: Observable<Contact[]> = this.contactsCollection.valueChanges();
}
