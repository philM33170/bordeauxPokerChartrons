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
  cnecService = inject(CnecService);
  clubsCollection: AngularFirestoreCollection<Club> =
    this.cnecService.readClubsCnec();
  clubs$: Observable<Club[]> = this.clubsCollection.valueChanges();

  constructor() {}
}
