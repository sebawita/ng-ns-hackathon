import { Component } from '@angular/core';

interface Resource {
  name: string;
  link: string;
  description: string;
}

interface Session {
  name: string;
  link: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent {

  resources: Resource[] = [
    {
      name: 'Docs: Getting Started with NativeScript and Angular',
      link: 'https://docs.nativescript.org/angular/start/introduction',
      description: 'The landing page for the NativeScript Angular docs'
    },
    {
      name: 'Docs: Navigation',
      link: 'https://docs.nativescript.org/angular/core-concepts/angular-navigation',
      description: `The navigation in NativeScript Angular is very similar to what you are used to in Angular for Web.
This page explains all you need to know about navigation in a NativeScript app.`
    },
    {
      name: 'Docs: NativeScript layouts',
      link: 'https://docs.nativescript.org/angular/ui/layouts/layout-containers',
      description: `There are no divs in the Native Mobile World.
This page explains all you need to know about the Layout Containers in NativeScript, and includes the FlexboxLayout`
    },
  ];

  courses: Resource[] = [
    {
      name: 'Getting Started (Playground)',
      link: 'https://play.nativescript.org/?template=play-ng&tutorial=getting-started-ng',
      description: 'Learn the NativeScript basics with NativeScript playground'
    },
    {
      name: 'Video Course',
      link: 'https://nativescripting.com/course/nativescript-with-angular-getting-started-guide',
      description: 'A free video course - from nativescripting.org - to get you started with NativeScript and Angular'
    },
    {
      name: '{N} Layouts',
      link: 'https://www.nslayouts.com/',
      description: 'Learn about NativeScript layouts in this fun interactive tutorial.'
    },
  ];

  sessions: Session[] = [
    {
      name: 'Webinar: Angular ❤ NativeScript #1',
      date: new Date(Date.UTC(2019, 7, 21, 16, 0)),
      link: 'https://www.nativescript.org/',
      description: `Join Sebastian and Stanimira to learn about building mobile apps with Angular and NativeScript.
Don't worry if you can't make it, we will record it and share it on YouTube.`
    },
    {
      name: 'Webinar: Angular ❤ NativeScript #2',
      date: new Date(Date.UTC(2019, 7, 23, 16, 0)),
      link: 'https://www.nativescript.org/',
      description: `Join Sebastian and Stanimira to continue learning about Angular and NativeScript.
Don't worry if you can't make it, we will record it and share it on YouTube.`
    },
  ];

}
