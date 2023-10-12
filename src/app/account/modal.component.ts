import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-component',
  template: `
    <div class="container">
      <h1 mat-dialog-title>Inscription Réussie</h1>
      <div mat-dialog-actions>
        <button class="btn btn-secondary btn-sm" (click)="onClick()">
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
   * Ferme la modal
   */
  onClick(): void {
    this.dialogRef.close();
  }
}
