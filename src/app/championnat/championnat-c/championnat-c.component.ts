import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-championnat-c',
  templateUrl: './championnat-c.component.html',
  styleUrls: ['./championnat-c.component.css'],
})
export class ChampionnatCComponent implements OnInit {
  players: Player[] = [];
  constructor() {}

  ngOnInit(): void {}
}
