import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-erreur-password',
  template: `
    <div class="container">
      <h2 mat-dialog-title>
        Veuillez effectuer une deconnexion puis une reconnexion si vous
        souhaitez modifier votre mot de passe.
      </h2>
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
  styleUrls: ['./modal-erreur-password.component.css'],
  //encapsulation: ViewEncapsulation.None,
})
export class ModalErreurPasswordComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);

  /**
   * @description Fermeture de la modal.
   * @returns void
   */
  onClick(): void {
    this.dialogRef.close();
  }
}
