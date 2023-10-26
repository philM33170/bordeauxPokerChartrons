import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Routing
import { GestionAccountRoutingModule } from './gestion-account-routing.module';

//Component
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditAuthInfosComponent } from './edit-auth-infos/edit-auth-infos.component';
import { GestionAccountComponent } from './gestion-account.component';

//Modal
import { ModalEditProfileComponent } from './edit-profile/modal-edit-profile.component';
import { ModalEditEmailComponent } from './edit-profile/modal-edit-email.component';
import { ModalConfirmProfileComponent } from './edit-profile/modal-confirm-profile.component';
import { ModalConfirmEmailComponent } from './edit-profile/modal-confirm-email.component';
import { ModalErreurEmailComponent } from './edit-profile/modal-erreur-email.component';
import { ModalEditPasswordComponent } from './edit-auth-infos/modal-edit-password.component';
import { ModalConfirmPasswordComponent } from './edit-auth-infos/modal-confirm-password.component';
import { ModalErreurPasswordComponent } from './edit-auth-infos/modal-erreur-password.component';

//angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EditProfileComponent,
    EditAuthInfosComponent,
    GestionAccountComponent,
    ModalEditProfileComponent,
    ModalEditEmailComponent,
    ModalConfirmProfileComponent,
    ModalConfirmEmailComponent,
    ModalErreurEmailComponent,
    ModalEditPasswordComponent,
    ModalConfirmPasswordComponent,
    ModalErreurPasswordComponent,
  ],
  imports: [
    CommonModule,
    GestionAccountRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [],
})
export class GestionAccountModule {}
