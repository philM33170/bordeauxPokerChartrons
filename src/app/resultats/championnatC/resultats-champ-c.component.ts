import { Component, OnInit, inject } from '@angular/core';
import { ResultatsChampCService } from './resultats-champ-c.service';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Participant } from 'src/app/model/participant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultats-champ-c',
  templateUrl: './resultats-champ-c.component.html',
  styleUrls: ['./resultats-champ-c.component.css'],
})
export class ResultatsChampCComponent implements OnInit {
  title: string = 'Résultats du Championnat C - saison 2023-2024';
  private readonly resultatService = inject(ResultatsChampCService);
  tournoisCollection!: AngularFirestoreCollection<Participant>;
  resultats$!: Observable<Participant[]>;
  constructor() {}

  ngOnInit(): void {}
  async getResultat(nom_du_tournoi: string) {}
}
