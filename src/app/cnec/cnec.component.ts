import { Component, inject } from '@angular/core';
import { Club } from '../model/club';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CnecService } from '../services/cnec.service';

@Component({
  selector: 'app-cnec',
  templateUrl: './cnec.component.html',
  styleUrls: ['./cnec.component.css'],
})
export class CnecComponent {
  /*clubs: Club[] = [
    {
      nom: 'Anonymous Poker',
      manche1: 64,
      manche2: 72,
      manche3: 54,
      manche4: 81,
      totalPts: 271,
    },
    {
      nom: 'Arkane Poker',
      manche1: 78,
      manche2: 56,
      manche3: 60,
      manche4: 71,
      totalPts: 265,
    },
    {
      nom: 'Bordeaux Poker Chartrons',
      manche1: 64,
      manche2: 70,
      manche3: 77,
      manche4: 44,
      totalPts: 255,
    },
    {
      nom: 'Les Luckboxers',
      manche1: 76,
      manche2: 54,
      manche3: 41,
      manche4: 55,
      totalPts: 226,
    },
    {
      nom: 'Team BRPC',
      manche1: 55,
      manche2: 60,
      manche3: 67,
      manche4: 41,
      totalPts: 223,
    },
    {
      nom: "Les Fou'lls du poker Montois",
      manche1: 47,
      manche2: 56,
      manche3: 59,
      manche4: 55,
      totalPts: 217,
    },
    {
      nom: 'Soulac 777 Poker Club',
      manche1: 38,
      manche2: 44,
      manche3: 62,
      manche4: 64,
      totalPts: 208,
    },
    {
      nom: 'Cartes sur Table',
      manche1: 42,
      manche2: 52,
      manche3: 44,
      manche4: 53,
      totalPts: 191,
    },
  ];*/
  cnecService = inject(CnecService);
  clubsCollection: AngularFirestoreCollection<Club> =
    this.cnecService.readClubsCnec();
  clubs$: Observable<Club[]> = this.clubsCollection.valueChanges();

  constructor() {}

  /*async ngOnInit(): Promise<void> {
    this.clubsCollection = await this.cnecService.readClubsCnec();
    this.clubs$ = this.clubsCollection.valueChanges();
  }*/
}
