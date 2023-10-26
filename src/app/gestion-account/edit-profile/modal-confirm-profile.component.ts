import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-profile',
  template: `
    <div class="container">
      <h1 mat-dialog-title>Nouveau pseudo enregistré</h1>
      <div mat-dialog-actions>
        <button type="button" class="btn btn-success" (click)="onClick()">
          FERMER
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./modal-confirm-profile.component.css'],
})
export class ModalConfirmProfileComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);

  /**
   * @description Fermeture de la modal.
   */
  onClick(): void {
    this.dialogRef.close();
  }
}
