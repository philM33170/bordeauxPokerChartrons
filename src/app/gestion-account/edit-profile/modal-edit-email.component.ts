import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-email',
  template: `
    <h3 mat-dialog-title>Nouvelle adresse Email</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input
          matInput
          [(ngModel)]="email"
          required
          pattern="^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$"
          #mail="ngModel"
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
        [mat-dialog-close]="email"
        [disabled]="mail.invalid"
      >
        Valider
      </button>
    </div>
  `,
  styleUrls: ['./modal-edit-email.component.css'],
})
export class ModalEditEmailComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);

  /**
   * @description Représente le nouveau mail saisi par l'utilisateur.
   */
  public email!: string;

  /**
   * @description Représente le password saisi par l'utilisateur.
   */
  public password!: string;

  /**
   * @description Fermeture de la modal.
   * @returns void
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
