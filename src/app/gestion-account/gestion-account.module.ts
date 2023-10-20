import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAccountRoutingModule } from './gestion-account-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditAuthInfosComponent } from './edit-auth-infos/edit-auth-infos.component';
import { GestionAccountComponent } from './gestion-account.component';

@NgModule({
  declarations: [
    EditProfileComponent,
    EditAuthInfosComponent,
    GestionAccountComponent,
  ],
  imports: [CommonModule, GestionAccountRoutingModule],
})
export class GestionAccountModule {}
