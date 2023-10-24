import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-email',
  template: `
    <h3 mat-dialog-title>Nouvelle adresse Email</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput [(ngModel)]="email" />
      </mat-form-field>
    </div>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Mot de passe</mat-label>
        <input matInput [(ngModel)]="password" />
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
        [mat-dialog-close]="[email, password]"
        cdkFocusInitial
      >
        Valider
      </button>
    </div>
  `,
  styleUrls: ['./modal-edit-email.component.css'],
  encapsulation: ViewEncapsulation.None,
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
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
