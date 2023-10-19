import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bpc';
  active: string | undefined;
  constructor() {}
  ngOnInit() {
    this.active = 'affiche';
  }
  updateActive() {
    this.active = 'not affiche';
  }
}
