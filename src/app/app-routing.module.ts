import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { CnicComponent } from './cnic/cnic.component';
import { CnecComponent } from './cnec/cnec.component';
import { Classement2023Component } from './archives/classement2023/classement2023.component';
import { ChampionnatAComponent } from './championnat/championnat-a/championnat-a.component';
import { ChampionnatBComponent } from './championnat/championnat-b/championnat-b.component';
import { ChampionnatCComponent } from './championnat/championnat-c/championnat-c.component';
import { ChampionnatAnnuelComponent } from './championnat/championnat-annuel/championnat-annuel.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ResultatComponent } from './resultats/resultat/resultat.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: 'club', component: ClubComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'cnic', component: CnicComponent },
  { path: 'cnec', component: CnecComponent },
  { path: 'archives', component: Classement2023Component },
  { path: 'championnatA', component: ChampionnatAComponent },
  { path: 'championnatB', component: ChampionnatBComponent },
  { path: 'championnatC', component: ChampionnatCComponent },
  { path: 'championnatAnnuel', component: ChampionnatAnnuelComponent },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'resultat', component: ResultatComponent },
  { path: 'auth/signin', component: LoginComponent },
  { path: 'auth/signup', component: AccountComponent },
  { path: 'forum', component: ForumComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
