import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/model/player';
import { ClassementAnnuel2023Service } from 'src/app/services/classement-annuel2023.service';

@Component({
  selector: 'app-classement2023',
  templateUrl: './classement2023.component.html',
  styleUrls: ['./classement2023.component.css'],
})
export class Classement2023Component {
  classementService = inject(ClassementAnnuel2023Service);
  players$: Observable<Player[]> = this.classementService.getClassement();
  constructor() {}

  /*ngOnInit(): void {
    this.getClassement();
  }

  getClassement() {
    this.classementService
      .getClassement()
      .subscribe((players) => (this.players = players));
  }*/
}
