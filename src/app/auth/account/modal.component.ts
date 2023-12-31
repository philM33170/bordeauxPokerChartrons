import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-component',
  template: `
    <div class="container">
      <h1 mat-dialog-title>Inscription Réussie</h1>
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
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);

  /**
   * @description Fermeture de la modal.
   * @returns void
   */
  onClick(): void {
    this.dialogRef.close();
  }
}
