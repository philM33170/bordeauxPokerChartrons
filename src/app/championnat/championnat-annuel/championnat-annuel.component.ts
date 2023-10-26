import { Component, inject } from '@angular/core';
import { Player } from 'src/app/model/player';
import { ChampionnatAnnuel2024Service } from './championnat-annuel2024.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-championnat-annuel',
  templateUrl: './championnat-annuel.component.html',
  styleUrls: ['./championnat-annuel.component.css'],
})
export class ChampionnatAnnuelComponent {
  private readonly championnatAnnuel2024Service = inject(
    ChampionnatAnnuel2024Service
  );
  /**
   * @description Observable qui représente le classement annuel du BPC.
   */
  players$: Observable<Player[]> =
    this.championnatAnnuel2024Service.getClassement();
}
