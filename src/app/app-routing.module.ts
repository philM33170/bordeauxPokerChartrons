import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { CnicComponent } from './cnic/cnic.component';
import { CnecRegionale2023Component } from './cnec/cnec-negionale2023/cnecRegionale2023.component';
import { CnecNationale2023Component } from './cnec/cnec-nationale2023/cnecNationale2023.component';
import { Classement2023Component } from './archives/classement2023/classement2023.component';
import { ChampionnatAComponent } from './championnat/championnat-a/championnat-a.component';
import { ChampionnatBComponent } from './championnat/championnat-b/championnat-b.component';
import { ChampionnatCComponent } from './championnat/championnat-c/championnat-c.component';
import { ChampionnatAnnuelComponent } from './championnat/championnat-annuel/championnat-annuel.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { LoginComponent } from './auth/login/login.component';
//import { AccountComponent } from './auth/account/account.component';
import { ForumComponent } from './forum/forum.component';
import { ResultatsChampAComponent } from './resultats/championnatA/resultats-champ-a.component';
import { ResultatsChampBComponent } from './resultats/championnatB/resultats-champ-b.component';
import { ResultatsChampCComponent } from './resultats/championnatC/resultats-champ-c.component';
import { MentionsComponent } from './mentions/mentions.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'club', component: ClubComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'cnic', component: CnicComponent },
  { path: 'cnecRegionale', component: CnecRegionale2023Component },
  { path: 'cnecNationale', component: CnecNationale2023Component },
  { path: 'archives', component: Classement2023Component },
  { path: 'championnatA', component: ChampionnatAComponent },
  { path: 'championnatB', component: ChampionnatBComponent },
  { path: 'championnatC', component: ChampionnatCComponent },
  { path: 'championnatAnnuel', component: ChampionnatAnnuelComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'resultatsA', component: ResultatsChampAComponent },
  { path: 'resultatsB', component: ResultatsChampBComponent },
  { path: 'resultatsC', component: ResultatsChampCComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'forum', component: ForumComponent },
  { path: 'auth/signin/forgot-password', component: ForgotPasswordComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
