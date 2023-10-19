import { Component, inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  private readonly logService = inject(LoginService);

  /**
   * @description Souscription qui met à jour la variable isAuthenticated.
   */
  subscription: Subscription = this.logService.authSubject.subscribe({
    next: (data: boolean) => {
      this.isAuthenticated = data;
    },
  });

  /**
   * @description Variable booleen qui émet true si l'utilisateur est connecté.
   */
  isAuthenticated!: boolean;

  /**
   * @description Permet la déconnexion de l'utilisateur en appelant la fonction onLogout() de LoginService.
   */
  onLogout(): void {
    this.logService.onLogout();
  }
}
