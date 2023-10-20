import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionAccountComponent } from './gestion-account.component';

const routes: Routes = [{ path: '', component: GestionAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAccountRoutingModule {}
