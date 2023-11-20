import { Component, inject } from '@angular/core';
import { Qualif2024Service } from './qualif2024.service';
import { Observable } from 'rxjs';
import { Club } from 'src/app/model/club';

@Component({
  selector: 'app-qualif2024',
  templateUrl: './qualif2024.component.html',
  styleUrls: ['./qualif2024.component.css'],
})
export class Qualif2024Component {
  private readonly qualif2024Service = inject(Qualif2024Service);
  /**
   * @description Observable qui représente le classement de la poule C - Qualif 2024.
   */
  clubs$: Observable<Club[]> = this.qualif2024Service
    .readClubsCnecRegionale()
    .valueChanges();
}
