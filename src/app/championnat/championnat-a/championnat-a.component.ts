import { Component, inject } from '@angular/core';
import { Player } from 'src/app/model/player';
import { ChampionnatAService } from './championnat-a.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-championnat-a',
  templateUrl: './championnat-a.component.html',
  styleUrls: ['./championnat-a.component.css'],
})
export class ChampionnatAComponent {
  private readonly championnatAService = inject(ChampionnatAService);
  /**
   * @description Représente le classement du champA du BPC.
   */
  players$: Observable<Player[]> = this.championnatAService.getClassement();
}
