import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { ClassementAnnuel2023Service } from 'src/app/services/classement-annuel2023.service';

@Component({
  selector: 'app-cnic',
  templateUrl: './cnic.component.html',
  styleUrls: ['./cnic.component.css'],
})
export class CnicComponent implements OnInit {
  players: Player[] = [];
  constructor(private classementService: ClassementAnnuel2023Service) {}

  ngOnInit(): void {
    const classement = this.classementService.classement;
    for (let player of classement) {
      if (player.membre === true) {
        this.players.push(player);
      }
    }
  }
}
