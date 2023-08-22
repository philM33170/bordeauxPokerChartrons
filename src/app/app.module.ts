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
import { CnecComponent } from './cnec/cnec.component';
import { FooterComponent } from './footer/footer/footer.component';
import { Classement2023Component } from './archives/classement2023/classement2023.component';
import { ChampionnatAComponent } from './championnat/championnat-a/championnat-a.component';
import { ChampionnatBComponent } from './championnat/championnat-b/championnat-b.component';
import { ChampionnatCComponent } from './championnat/championnat-c/championnat-c.component';
import { ChampionnatAnnuelComponent } from './championnat/championnat-annuel/championnat-annuel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClubComponent,
    ContactComponent,
    NavbarComponent,
    AccueilComponent,
    CnicComponent,
    CnecComponent,
    FooterComponent,
    Classement2023Component,
    ChampionnatAComponent,
    ChampionnatBComponent,
    ChampionnatCComponent,
    ChampionnatAnnuelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
