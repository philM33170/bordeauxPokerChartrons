import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-password',
  template: `
    <div class="container">
      <h1 mat-dialog-title>Nouveau mot de passe enregistré</h1>
      <div mat-dialog-actions>
        <button type="button" class="btn btn-success" (click)="onClick()">
          FERMER
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./modal-confirm-password.component.css'],
  //encapsulation: ViewEncapsulation.None,
})
export class ModalConfirmPasswordComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);

  /**
   * @description Fermeture de la modal.
   * @returns void
   */
  onClick(): void {
    this.dialogRef.close();
  }
}
