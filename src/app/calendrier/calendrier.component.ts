import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  CalendarEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarView,
} from 'angular-calendar';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./calendrier.component.css'],
})
export class CalendrierComponent implements OnInit {
  viewDate: Date = new Date();

  view: CalendarView = CalendarView.Month;

  events: CalendarEvent[] = [
    {
      title: 'Rentrée du BPC - Inscription',
      start: new Date('2023-08-31T20:00'),
      end: new Date('2023-08-31T1h00'),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach((day) => {
      day.cssClass = 'bg-pink';
    });
  }
}
