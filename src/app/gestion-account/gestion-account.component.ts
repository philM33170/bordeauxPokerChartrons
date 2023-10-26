import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-gestion-account',
  templateUrl: './gestion-account.component.html',
  styleUrls: ['./gestion-account.component.css'],
})
export class GestionAccountComponent implements OnInit, OnDestroy {
  /**
   * @description Permet de souscrire au subject de loginService
   * qui surveille l'état de connexion de l'utilisateur.
   */
  currentUserSubscription!: Subscription;
  currentUser!: User;
  logService: LoginService = inject(LoginService);

  ngOnInit(): void {
    this.initCurrentUser();
  }

  /**
   * @description Fonction qui associe currentUserSubscription au currentUserSubject de loginService.
   * @returns void
   *
   */
  initCurrentUser(): void {
    this.currentUserSubscription = this.logService.currentUserSubject.subscribe(
      {
        next: (user) => (this.currentUser = <User>user),
      }
    );
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
