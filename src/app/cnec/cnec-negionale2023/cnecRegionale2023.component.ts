import { Component, inject } from '@angular/core';
import { Club } from '../../model/club';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CnecService } from '../../services/cnec.service';

@Component({
  selector: 'app-cnec',
  templateUrl: './cnecRegionale2023.component.html',
  styleUrls: ['./cnecRegionale2023.component.css'],
})
export class CnecRegionale2023Component {
  private readonly cnecService = inject(CnecService);
  clubsCollection: AngularFirestoreCollection<Club> =
    this.cnecService.readClubsCnec();
  clubs$: Observable<Club[]> = this.clubsCollection.valueChanges();

  constructor() {}
}
