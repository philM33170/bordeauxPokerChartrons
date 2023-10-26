import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-edit-password',
  template: `
    <h3 mat-dialog-title>Nouveau mot de passe</h3>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Mot de passe actuel</mat-label>
        <input
          matInput
          [(ngModel)]="passwordActually"
          minlength="6"
          required
          #actuel="ngModel"
        />
      </mat-form-field>
    </div>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Nouveau mot de passe</mat-label>
        <input
          matInput
          [(ngModel)]="newPassword"
          minlength="6"
          required
          #new="ngModel"
        />
      </mat-form-field>
    </div>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Confimez le nouveau mot de passe</mat-label>
        <input
          matInput
          [(ngModel)]="confirmNewPassword"
          minlength="6"
          required
          #confirm="ngModel"
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
        [mat-dialog-close]="newPassword"
        [disabled]="
          actuel.invalid ||
          new.invalid ||
          confirm.invalid ||
          newPassword !== confirmNewPassword
        "
      >
        Valider
      </button>
    </div>
  `,
  styleUrls: ['./modal-edit-password.component.css'],
})
export class ModalEditPasswordComponent {
  private readonly dialogRef: MatDialogRef<any> = inject(MatDialogRef);
  public passwordActually!: string;
  public newPassword!: string;
  public confirmNewPassword!: string;

  /**
   * @description Fermeture de la modal.
   * @returns void
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
