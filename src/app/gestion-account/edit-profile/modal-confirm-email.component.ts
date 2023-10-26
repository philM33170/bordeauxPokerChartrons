import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-email',
  template: `
    <div class="container">
      <h1 mat-dialog-title>
        Un email de confirmation a été envoyé à votre nouvelle adresse email.
      </h1>
      <div mat-dialog-actions>
        <button
          type="button"
          class="btn btn-success custom"
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
   * @returns void
   */
  onClick(): void {
    this.dialogRef.close();
  }
}
