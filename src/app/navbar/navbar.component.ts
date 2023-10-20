import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly logService = inject(LoginService);
  private readonly router: Router = inject(Router);
  currentUserSubscription!: Subscription;
  currentUser!: User;
  ngOnInit(): void {
    this.currentUserSubscription = this.logService.currentUserSubject.subscribe(
      {
        next: (user) => (this.currentUser = <User>user),
      }
    );
  }

  /**
   * @description Permet la déconnexion de l'utilisateur en appelant la fonction onLogout() de LoginService
   * puis redirige l'utilisateur vers la page de connexion en cas de succès.
   */
  onLogout(): void {
    this.logService.onLogout().then(() => {
      this.router.navigate(['auth', 'signin']);
    });
  }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
