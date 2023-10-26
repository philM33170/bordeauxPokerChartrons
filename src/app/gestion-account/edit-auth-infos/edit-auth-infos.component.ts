import { Component, Input, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { ModalEditPasswordComponent } from './modal-edit-password.component';
import { Router } from '@angular/router';
import { ModalConfirmPasswordComponent } from './modal-confirm-password.component';
import { ModalErreurPasswordComponent } from './modal-erreur-password.component';

@Component({
  selector: 'app-edit-auth-infos',
  templateUrl: './edit-auth-infos.component.html',
  styleUrls: ['./edit-auth-infos.component.css'],
})
export class EditAuthInfosComponent implements OnInit {
  @Input() currentUser!: User;
  private readonly dialog: MatDialog = inject(MatDialog);
  private readonly logService: LoginService = inject(LoginService);
  private readonly router: Router = inject(Router);

  ngOnInit(): void {}

  /**
   * @description Appel de la fonction open() pour ouvrir la modal ModalEditPasswordComponent
   * puis mise à jour du mot de passe de l'utilisateur en BDD Firebase.
   * @returns void
   */
  onEditPassword(): void {
    const dialogRef = this.dialog.open(ModalEditPasswordComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.currentUser
          .updatePassword(data)
          .then(() => {
            this.dialog.open(ModalConfirmPasswordComponent, {
              width: '450px',
            });
            this.logService.onLogout().then(() => {
              this.router.navigate(['auth', 'signin']);
            });
          })
          .catch((error) => {
            this.dialog.open(ModalErreurPasswordComponent, {
              width: '360px',
            });
          });
      }
    });
  }
}
