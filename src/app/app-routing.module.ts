import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { CnicComponent } from './cnic/cnic.component';
import { CnecComponent } from './cnec/cnec.component';
import { Classement2023Component } from './archives/classement2023/classement2023.component';

const routes: Routes = [
  { path: 'club', component: ClubComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'cnic', component: CnicComponent },
  { path: 'cnec', component: CnecComponent },
  { path: 'archives', component: Classement2023Component },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
