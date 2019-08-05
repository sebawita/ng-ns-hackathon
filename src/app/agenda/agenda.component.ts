import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./agenda.component.sass']
})
export class AgendaComponent implements OnInit {

  agenda: Day[] = [
    {
      date: new Date('12-Sep-2019'),
      items: [
        {
          time: new Date('12-Sep-2019 10:00 GMT+2'),
          title: 'Kick off',
          description: 'An online session where we will kick off the event'
        },
        {
          time: new Date('12-Sep-2019 11:00 GMT+2'),
          title: 'Hacking Day #1',
          description: 'Time for you to start hacking'
        }
      ]
    },
    {
      date: new Date('13-Sep-2019'),
      items: [
        {
          time: new Date('13-Sep-2019 10:00 GMT+2'),
          title: 'Hacking Day #2',
          description: 'You keep on hacking'
        }
      ]
    },
    {
      date: new Date('14-Sep-2019'),
      items: [
        {
          time: new Date('14-Sep-2019 10:00 GMT+2'),
          title: 'Hacking Day #3',
          description: 'You keep on hacking'
        }
      ]
    },
    {
      date: new Date('15-Sep-2019'),
      items: [
        {
          time: new Date('15-Sep-2019 10:00 GMT+2'),
          title: 'Hacking Day #4',
          description: 'You should be finalising your hacks'
        },
        {
          time: new Date('15-Sep-2019 23:00 GMT+2'),
          title: 'Submission of your apps',
          description: 'Time to submit your apps'
        },
      ]
    },
    {
      date: new Date('16-Sep-2019'),
      items: [
        {
          time: new Date('16-Sep-2019 10:00 GMT+2'),
          title: 'Judgement day',
          description: 'The judges will review all submissions'
        },
        {
          time: new Date('16-Sep-2019 18:00 GMT+2'),
          title: 'Winners announced',
          description: 'Time to submit your apps'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
