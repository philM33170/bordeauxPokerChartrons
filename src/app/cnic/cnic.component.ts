import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';

@Component({
  selector: 'app-cnic',
  templateUrl: './cnic.component.html',
  styleUrls: ['./cnic.component.css'],
})
export class CnicComponent implements OnInit {
  Players: Player[] = [
    { pseudo: 'Creep', ptsChampA: 0, membre: true },
    { pseudo: 'Ombruss', ptsChampA: 0, membre: true },
    { pseudo: 'ManuKiller', ptsChampA: 0, membre: true },
    { pseudo: 'Tass', ptsChampA: 0, membre: true },
    { pseudo: 'Ataleuse', ptsChampA: 0, membre: true },
    { pseudo: 'Greg', ptsChampA: 0, membre: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
