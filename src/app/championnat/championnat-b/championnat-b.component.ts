import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-championnat-b',
  templateUrl: './championnat-b.component.html',
  styleUrls: ['./championnat-b.component.css'],
})
export class ChampionnatBComponent implements OnInit {
  players: Player[] = [];
  constructor() {}

  ngOnInit(): void {}
}
