import { Component, Inject, ViewEncapsulation, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-modal-edit-profile',
  template: `
    <h3 mat-dialog-title>Nouveau pseudo</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Pseudo</mat-label>
        <input
          matInput
          [(ngModel)]="pseudo"
          required
          minlength="3"
          #name="ngModel"
        />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button
        class="cancel btn btn-danger custom"
        mat-button
        (click)="onNoClick()"
      >
        Annuler
      </button>
      <button
        class="valid btn btn-success custom"
        mat-button
        [mat-dialog-close]="pseudo"
        [disabled]="name.invalid"
      >
        Valider
      </button>
    </div>
  `,
  styleUrls: ['./modal-edit-profile.component.css'],
  //encapsulation: ViewEncapsulation.None,
})
export class ModalEditProfileComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);
  /**
   * @description Représente le nouveau pseudo saisi par l'utilisateur.
   */
  public pseudo!: string;
  /**
   * @description Fermeture de la modal.
   * @returns void
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
