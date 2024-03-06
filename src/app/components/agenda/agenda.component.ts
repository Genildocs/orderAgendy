import { Component } from '@angular/core';
import {
  ScheduleModule,
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [ScheduleModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
  ],
})
export class AgendaComponent {
  public selectedDate: Date = new Date(2024, 3, 5);
  private data: object[] = [
    {
      Id: 1,
      Location: 'Office',
      StartTime: new Date(2024, 1, 1, 9, 30),
      EndTime: new Date(2024, 1, 12, 10, 30),
      RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1',
    },
  ];

  public eventSettings: EventSettingsModel = { dataSource: this.data };
}
