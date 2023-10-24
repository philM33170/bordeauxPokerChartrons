import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { ModalEditProfileComponent } from './modal-edit-profile.component';
import { ModalEditEmailComponent } from './modal-edit-email.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ModalConfirmProfileComponent } from './modal-confirm-profile.component';
import { ModalConfirmEmailComponent } from './modal-confirm-email.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit, OnChanges {
  /**
   * @description Représente l'utilisateur connecté de type Firebase.User.
   */
  @Input() currentUser!: User;
  private readonly dialog: MatDialog = inject(MatDialog);
  private readonly logService: LoginService = inject(LoginService);
  private readonly router: Router = inject(Router);
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
  /**
   * @description Appel de la fonction open() pour ouvrir la modal ModalEditProfileComponent
   * puis mise à jour du pseudo de l'utilisateur en BDD Firebase.
   */
  onEditProfile(): void {
    const dialogRef = this.dialog.open(ModalEditProfileComponent, {
      width: '360px',
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.currentUser
          .updateProfile({
            displayName: data,
          })
          .then(() => {
            this.dialog.open(ModalConfirmProfileComponent, {
              width: '450px',
            });
          })
          .catch(console.error);
      }
    });
  }
  /**
   * @description Appel de la fonction open() pour ouvrir la modal ModalEditEmailComponent
   * puis mise à jour de l'email de l'utilisateur en BDD Firebase.
   */
  onEditEmail(): void {
    const dialogRef = this.dialog.open(ModalEditEmailComponent, {
      width: '360px',
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.currentUser
          .verifyBeforeUpdateEmail(data[0])
          .then(() => {
            this.dialog.open(ModalConfirmEmailComponent, {
              width: '450px',
            });
            this.logService.onLogout().then(() => {
              this.router.navigate(['auth', 'signin']);
            });
          })
          .catch(console.error);
      }
    });
  }
}
