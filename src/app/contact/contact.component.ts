import { Component, inject } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private readonly contactService = inject(ContactService);
  /**
   * @description Représente la liste des membres du bureau du BPC.
   */
  contacts$: Observable<Contact[]> = this.contactService
    .readContacts()
    .valueChanges();
}
