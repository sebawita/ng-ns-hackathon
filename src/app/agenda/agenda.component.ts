import { Component } from '@angular/core';

interface Day {
  date: Date;
  items: AgendaItem[];
}

interface AgendaItem {
  time: Date;
  title: string;
  description: string;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

  agenda: Day[] = [
    {
      date: new Date(Date.UTC(2019, 8, 12, 8, 0)),
      items: [
        {
          time: new Date(Date.UTC(2019, 8, 12, 8, 0)),
          title: 'Kick off',
          description: 'An online session where we will kick off the event'
        },
        {
          time: new Date(Date.UTC(2019, 8, 12, 8, 0)),
          title: 'Welcome message - for early birds',
          description: 'An online session where we will kick off the event'
        },
        {
          time: new Date(Date.UTC(2019, 8, 12, 9, 0)),
          title: 'Hacking begins',
          description: 'Time for you to start hacking'
        },
        {
          time: new Date(Date.UTC(2019, 8, 12, 17, 0)),
          title: 'Welcome message - late birds',
          description: 'An online session where we will kick off the event'
        },
      ]
    },
    {
      date: new Date(Date.UTC(2019, 8, 16, 8, 0)),
      items: [
        {
          time: new Date(Date.UTC(2019, 8, 16, 8, 0)),

          title: 'Submission of your apps',
          description: 'Time to submit your apps'
        },
        {
          time: new Date(Date.UTC(2019, 8, 16, 15, 0)),
          title: 'Judging Begins',
          description: 'The judges will review all submissions'
        },
      ]
    },
    {
      date: new Date(Date.UTC(2019, 8, 19, 11, 0)),
      items: [
        {
          time: new Date(Date.UTC(2019, 8, 19, 11, 0)),
          title: 'Winners announced',
          description: 'Time to submit your apps'
        },
      ]
    },
  ];
}
