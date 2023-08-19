import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { ClassementAnnuel2023Service } from 'src/app/services/classement-annuel2023.service';

@Component({
  selector: 'app-classement2023',
  templateUrl: './classement2023.component.html',
  styleUrls: ['./classement2023.component.css'],
})
export class Classement2023Component implements OnInit {
  Players: Player[] = [];
  constructor(private classementService: ClassementAnnuel2023Service) {}

  ngOnInit(): void {
    this.Players = this.classementService.classement;
  }
}
