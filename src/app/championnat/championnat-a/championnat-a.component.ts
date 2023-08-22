import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-championnat-a',
  templateUrl: './championnat-a.component.html',
  styleUrls: ['./championnat-a.component.css'],
})
export class ChampionnatAComponent implements OnInit {
  players: Player[] = [];
  constructor() {}

  ngOnInit(): void {}
}
