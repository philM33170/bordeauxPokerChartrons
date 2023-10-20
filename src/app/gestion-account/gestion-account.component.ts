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
  currentUserSubscription!: Subscription;
  currentUser!: User;
  logService: LoginService = inject(LoginService);
  constructor() {}

  ngOnInit(): void {
    this.initCurrentUser();
  }
  initCurrentUser(): void {
    /*this.currentUserSubscription = this.logService.authSubject.subscribe({
      next: user => this.currentUser = <User>user,
    })*/
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
