import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CnicComponent } from './cnic/cnic.component';
import { CnecRegionale2023Component } from './cnec/cnec-negionale2023/cnecRegionale2023.component';
import { CnecNationale2023Component } from './cnec/cnec-nationale2023/cnecNationale2023.component';
import { FooterComponent } from './footer/footer/footer.component';
import { Classement2023Component } from './archives/classement2023/classement2023.component';
import { ChampionnatAComponent } from './championnat/championnat-a/championnat-a.component';
import { ChampionnatBComponent } from './championnat/championnat-b/championnat-b.component';
import { ChampionnatCComponent } from './championnat/championnat-c/championnat-c.component';
import { ChampionnatAnnuelComponent } from './championnat/championnat-annuel/championnat-annuel.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { AccountComponent } from './auth/account/account.component';
import { ForumComponent } from './forum/forum.component';
import { MentionsComponent } from './mentions/mentions.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

//Module enfant
import { AuthModule } from './auth/auth.module';

//Firebase imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import config from '../../my-firestore';

//Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { ResultatsChampAComponent } from './resultats/championnatA/resultats-champ-a.component';
import { ResultatsChampBComponent } from './resultats/championnatB/resultats-champ-b.component';
import { ResultatsChampCComponent } from './resultats/championnatC/resultats-champ-c.component';
import { GestionAccountComponent } from './gestion-account/gestion-account.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClubComponent,
    ContactComponent,
    NavbarComponent,
    AccueilComponent,
    CnicComponent,
    CnecRegionale2023Component,
    FooterComponent,
    Classement2023Component,
    ChampionnatAComponent,
    ChampionnatBComponent,
    ChampionnatCComponent,
    ChampionnatAnnuelComponent,
    CalendrierComponent,
    PageNotFoundComponent,
    ForumComponent,
    ResultatsChampAComponent,
    ResultatsChampBComponent,
    ResultatsChampCComponent,
    CnecNationale2023Component,
    MentionsComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    MatDialogModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
