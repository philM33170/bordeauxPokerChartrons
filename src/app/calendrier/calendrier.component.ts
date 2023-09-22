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
    {
      title: 'Champ A - MTT1 - Day1',
      start: new Date('2023-09-07T20:00'),
      end: new Date('2023-09-07T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT1',
      start: new Date('2023-09-12T20:00'),
      end: new Date('2023-09-12T23:30'),
    },
    {
      title: 'Champ A - MTT1 - Day2 + Side1',
      start: new Date('2023-09-14T20:00'),
      end: new Date('2023-09-14T23:30'),
    },
    {
      title: 'Champ SNG - SNG1',
      start: new Date('2023-09-19T20:00'),
      end: new Date('2023-09-19T23:30'),
    },
    {
      title: 'Champ A - MTT2 - Day1',
      start: new Date('2023-09-21T20:00'),
      end: new Date('2023-09-21T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT2',
      start: new Date('2023-09-26T20:00'),
      end: new Date('2023-09-26T23:30'),
    },
    {
      title: 'Champ A - MTT2 - Day2 + Side2',
      start: new Date('2023-09-28T20:00'),
      end: new Date('2023-09-28T23:30'),
    },
    {
      title: 'Finale Nationale CNEC',
      start: new Date('2023-09-30T10:00'),
      end: new Date('2023-09-30T23:30'),
    },
    {
      title: 'Finale Nationale CNEC',
      start: new Date('2023-10-01T10:00'),
      end: new Date('2023-10-01T17:30'),
    },
    {
      title: 'Poker School',
      start: new Date('2023-10-03T20:00'),
      end: new Date('2023-10-03T23:30'),
    },
    {
      title: 'Champ A - MTT3 - Day1',
      start: new Date('2023-10-05T20:00'),
      end: new Date('2023-10-05T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT3',
      start: new Date('2023-10-10T20:00'),
      end: new Date('2023-10-10T23:30'),
    },
    {
      title: 'Champ A - MTT3 - Day2 + side3',
      start: new Date('2023-10-12T20:00'),
      end: new Date('2023-10-12T23:30'),
    },
    {
      title: 'Bordeaux Series 1',
      start: new Date('2023-10-15T9:30'),
      end: new Date('2023-10-15T23:30'),
    },
    {
      title: 'Champ SNG - SNG2',
      start: new Date('2023-10-17T20:00'),
      end: new Date('2023-10-17T23:30'),
    },
    {
      title: 'Champ A - MTT4 - Day1',
      start: new Date('2023-10-19T20:00'),
      end: new Date('2023-10-19T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT4',
      start: new Date('2023-10-24T20:00'),
      end: new Date('2023-10-24T23:30'),
    },
    {
      title: 'Champ A - MTT4 - Day2 + side4',
      start: new Date('2023-10-26T20:00'),
      end: new Date('2023-10-26T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT5',
      start: new Date('2023-10-31T20:00'),
      end: new Date('2023-10-31T23:30'),
    },
    {
      title: 'Champ A - MTT5 - Day1',
      start: new Date('2023-11-02T20:00'),
      end: new Date('2023-11-02T23:30'),
    },
    {
      title: 'Poker School',
      start: new Date('2023-11-07T20:00'),
      end: new Date('2023-11-07T23:30'),
    },
    {
      title: 'Champ A - MTT5 - Day2 + side5',
      start: new Date('2023-11-09T20:00'),
      end: new Date('2023-11-09T23:30'),
    },
    {
      title: 'Champ SNG - SNG3',
      start: new Date('2023-11-14T20:00'),
      end: new Date('2023-11-14T23:30'),
    },
    {
      title: 'Champ A - MTT6 - Day1',
      start: new Date('2023-11-16T20:00'),
      end: new Date('2023-11-16T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT6',
      start: new Date('2023-11-21T20:00'),
      end: new Date('2023-11-21T23:30'),
    },
    {
      title: 'Champ A - MTT6 - Day2 + side6',
      start: new Date('2023-11-23T20:00'),
      end: new Date('2023-11-23T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT7',
      start: new Date('2023-11-28T20:00'),
      end: new Date('2023-11-28T23:30'),
    },
    {
      title: 'Champ A - MTT7 - Day1',
      start: new Date('2023-11-30T20:00'),
      end: new Date('2023-11-30T23:30'),
    },
    {
      title: 'Bordeaux Series 2',
      start: new Date('2023-12-03T9:30'),
      end: new Date('2023-12-03T23:30'),
    },
    {
      title: 'Poker School',
      start: new Date('2023-12-05T20:00'),
      end: new Date('2023-12-05T23:30'),
    },
    {
      title: 'Champ A - MTT7 - Day2 + side7',
      start: new Date('2023-12-07T20:00'),
      end: new Date('2023-12-07T23:30'),
    },
    {
      title: 'Champ SNG - SNG4',
      start: new Date('2023-12-12T20:00'),
      end: new Date('2023-12-12T23:30'),
    },
    {
      title: 'Tournoi de Noel',
      start: new Date('2023-12-14T20:00'),
      end: new Date('2023-12-14T23:30'),
    },
    {
      title: 'Champ A Turbo - MTT8',
      start: new Date('2023-12-19T20:00'),
      end: new Date('2023-12-19T23:30'),
    },
    {
      title: 'Champ B Turbo - MTT1',
      start: new Date('2024-01-02T20:00'),
      end: new Date('2024-01-02T23:30'),
    },
    {
      title: 'Champ B - MTT1 - Day1',
      start: new Date('2024-01-04T20:00'),
      end: new Date('2024-01-04T23:30'),
    },
    {
      title: 'Poker School',
      start: new Date('2024-01-09T20:00'),
      end: new Date('2024-01-09T23:30'),
    },
    {
      title: 'Champ B - MTT1 - Day2 + side1',
      start: new Date('2024-01-11T20:00'),
      end: new Date('2024-01-11T23:30'),
    },
    {
      title: 'Champ SNG - SNG5',
      start: new Date('2024-01-16T20:00'),
      end: new Date('2024-01-16T23:30'),
    },
    {
      title: 'Champ B - MTT2 - Day1',
      start: new Date('2024-01-18T20:00'),
      end: new Date('2024-01-18T23:30'),
    },
    {
      title: 'Champ B Turbo - MTT2',
      start: new Date('2024-01-23T20:00'),
      end: new Date('2024-01-23T23:30'),
    },
    {
      title: 'Champ B - MTT2 - Day2 + side2',
      start: new Date('2024-01-25T20:00'),
      end: new Date('2024-01-25T23:30'),
    },
    {
      title: 'Champ B Turbo - MTT3',
      start: new Date('2024-01-30T20:00'),
      end: new Date('2024-01-30T23:30'),
    },
    {
      title: 'Champ B - MTT3 - Day1',
      start: new Date('2024-02-01T20:00'),
      end: new Date('2024-02-01T23:30'),
    },
    {
      title: 'Bordeaux séries 3',
      start: new Date('2024-02-04T20:00'),
      end: new Date('2024-02-04T23:30'),
    },
    {
      title: 'Poker School',
      start: new Date('2024-02-06T20:00'),
      end: new Date('2024-02-06T23:30'),
    },
    {
      title: 'Champ B - MTT3 - Day2 + side3',
      start: new Date('2024-02-08T20:00'),
      end: new Date('2024-02-08T23:30'),
    },
    {
      title: 'Champ SNG - SNG6',
      start: new Date('2024-02-13T20:00'),
      end: new Date('2024-02-13T23:30'),
    },
    {
      title: 'Champ B - MTT4 - Day1',
      start: new Date('2024-02-15T20:00'),
      end: new Date('2024-02-15T23:30'),
    },
    {
      title: 'Champ B Turbo - MTT4',
      start: new Date('2024-02-20T20:00'),
      end: new Date('2024-02-20T23:30'),
    },
    {
      title: 'Champ B - MTT4 - Day2 + side4',
      start: new Date('2024-02-22T20:00'),
      end: new Date('2024-02-22T23:30'),
    },
    {
      title: 'Champ B Turbo - MTT5',
      start: new Date('2024-02-27T20:00'),
      end: new Date('2024-02-27T23:30'),
    },
    {
      title: 'Champ B - MTT5 - Day1',
      start: new Date('2024-02-29T20:00'),
      end: new Date('2024-02-29T23:30'),
    },
    {
      title: 'Poker School',
      start: new Date('2024-03-05T20:00'),
      end: new Date('2024-03-05T23:30'),
    },
    {
      title: 'Champ B - MTT5 - Day2 + side5',
      start: new Date('2024-03-07T20:00'),
      end: new Date('2024-03-07T23:30'),
    },
    {
      title: 'Champ SNG - SNG7',
      start: new Date('2024-03-12T20:00'),
      end: new Date('2024-03-12T23:30'),
    },
    {
      title: 'Champ B - MTT6 - Day1',
      start: new Date('2024-03-14T20:00'),
      end: new Date('2024-03-14T23:30'),
    },
    {
      title: 'Champ B Turbo - MTT6',
      start: new Date('2024-03-19T20:00'),
      end: new Date('2024-03-19T23:30'),
    },
    {
      title: 'Champ B - MTT6 - Day2 + side6',
      start: new Date('2024-03-21T20:00'),
      end: new Date('2024-03-21T23:30'),
    },
    {
      title: 'Champ B Turbo - MTT7',
      start: new Date('2024-03-26T20:00'),
      end: new Date('2024-03-26T23:30'),
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
