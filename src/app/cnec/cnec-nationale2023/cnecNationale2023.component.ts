import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from 'src/app/model/club';
import { CnecService } from 'src/app/services/cnec.service';

@Component({
  selector: 'app-cnec-nationale2023',
  templateUrl: './cnecNationale2023.component.html',
  styleUrls: ['./cnecNationale2023.component.css'],
})
export class CnecNationale2023Component {
  private readonly cnecService = inject(CnecService);
  /**
   * @description Observable qui représente le classement de la finale nationale CNEC 2023.
   */
  clubs$: Observable<Club[]> = this.cnecService
    .readClubsCnecNationale()
    .valueChanges();
}
