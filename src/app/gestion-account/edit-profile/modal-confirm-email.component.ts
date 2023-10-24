import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-email',
  template: `
    <div class="container">
      <h1 mat-dialog-title>Nouvelle adresse email enregistrée</h1>
      <div mat-dialog-actions>
        <button
          type="button"
          class="btn btn-success btn-lg"
          (click)="onClick()"
        >
          FERMER
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./modal-confirm-email.component.css'],
})
export class ModalConfirmEmailComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);

  /**
   * @description Fermeture de la modal.
   */
  onClick(): void {
    this.dialogRef.close();
  }
}
