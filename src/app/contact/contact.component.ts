import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  tass: Contact = {
    nom: 'Bureau',
    prenom: 'Tass',
    phone: 695605126,
    mail: 'tatiana.bureau@gmail.com',
  };
  ataleuse: Contact = {
    nom: 'Batisse',
    prenom: 'Nadine',
    phone: 648137189,
    mail: 'nadine-batisse@outlook.fr',
  };
  ombruss: Contact = {
    nom: 'Irigoyen',
    prenom: 'Jérémy',
    phone: 650325627,
    mail: '',
  };
  manukiller: Contact = {
    nom: 'Killherr',
    prenom: 'Emmanuel',
    phone: 676497928,
    mail: 'e.killherr@gmail.com',
  };
  constructor() {}

  ngOnInit(): void {}
}
