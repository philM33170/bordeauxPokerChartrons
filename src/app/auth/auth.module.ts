import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routing
import { AuthRoutingModule } from './auth-routing.module';

//Component
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

//Angular Material
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
