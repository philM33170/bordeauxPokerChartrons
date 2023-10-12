import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private readonly logService = inject(LoginService);
  subscription!: Subscription;
  isAuthenticated!: boolean; //= this.logService.getIsAuthenticated()
  constructor() {}

  ngOnInit(): void {
    this.subscription = this.logService.authSubject.subscribe({
      next: (data: boolean) => {
        this.isAuthenticated = data;
      },
    });
    this.logService.getIsAuthenticated();
  }

  /**
   * Permet la déconnexion de l'utilisateur en appelant la fonction onLogout() de LoginService
   */
  onLogout(): void {
    this.logService.onLogout();
  }
}
