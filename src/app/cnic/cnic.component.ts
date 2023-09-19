import { Component, OnInit, inject } from '@angular/core';
import { Player } from '../model/player';
import { ClassementAnnuel2023Service } from 'src/app/services/classement-annuel2023.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cnic',
  templateUrl: './cnic.component.html',
  styleUrls: ['./cnic.component.css'],
})
export class CnicComponent {
  classementService = inject(ClassementAnnuel2023Service);
  players$: Observable<Player[]> = this.classementService.getClassementCNIC();
  constructor() {}

  /*ngOnInit(): void {
    this.getClassement();
  }

  getClassement() {
    this.classementService
      .getClassementCNIC()
      .subscribe((players) => (this.players = players));
  }*/
}
