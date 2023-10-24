import { Component, Inject, ViewEncapsulation, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-modal-edit-profile',
  template: `
    <h3 mat-dialog-title>Veuillez renseigner votre nouveau pseudo :</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Pseudo</mat-label>
        <input matInput [(ngModel)]="pseudo" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button
        class="cancel btn btn-danger btn-sm"
        mat-button
        (click)="onNoClick()"
      >
        Annuler
      </button>
      <button
        class="valid btn btn-success btn-sm"
        mat-button
        [mat-dialog-close]="pseudo"
        cdkFocusInitial
      >
        Valider
      </button>
    </div>
  `,
  styleUrls: ['./modal-edit-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalEditProfileComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);
  /**
   * @description Représente le nouveau pseudo saisi par l'utilisateur.
   */
  public pseudo!: string;
  /**
   * @description Fermeture de la modal.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
