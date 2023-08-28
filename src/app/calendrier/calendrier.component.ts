import { Component, ViewEncapsulation } from '@angular/core';
import {
  CalendarEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarView,
} from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./calendrier.component.css'],
})
export class CalendrierComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen = false;
  events: CalendarEvent[] = [
    {
      title: 'Rentrée du BPC - Inscription - Auberge espagnole 20h00-01h00',
      start: new Date('2023-08-31T20:00'),
      end: new Date('2023-08-31T23:30'),
    },
  ];
  constructor() {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach((day) => {
      day.cssClass = 'bg-pink';
    });
  }
}
