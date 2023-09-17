import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bpc';
  active: string | undefined;

  constructor(private logService: LoginService) {}
  ngOnInit() {
    this.active = 'affiche';
  }

  updateActive() {
    this.active = 'not affiche';
    this.logService.getIsAuthenticated();
  }
}
