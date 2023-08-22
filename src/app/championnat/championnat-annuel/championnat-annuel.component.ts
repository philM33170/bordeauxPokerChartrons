import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-championnat-annuel',
  templateUrl: './championnat-annuel.component.html',
  styleUrls: ['./championnat-annuel.component.css'],
})
export class ChampionnatAnnuelComponent implements OnInit {
  players: Player[] = [];
  constructor() {}

  ngOnInit(): void {}
}
