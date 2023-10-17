import { Component, OnInit, inject } from '@angular/core';
import { ResultatsChampBService } from './resultats-champ-b.service';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Participant } from 'src/app/model/participant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultats-champ-b',
  templateUrl: './resultats-champ-b.component.html',
  styleUrls: ['./resultats-champ-b.component.css'],
})
export class ResultatsChampBComponent implements OnInit {
  title: string = 'Résultats du Championnat B - saison 2023-2024';
  private readonly resultatService = inject(ResultatsChampBService);
  tournoisCollection!: AngularFirestoreCollection<Participant>;
  resultats$!: Observable<Participant[]>;
  constructor() {}

  ngOnInit(): void {}
  async getResultat(nom_du_tournoi: string) {}
}
