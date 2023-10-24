import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class AuthModule {}
