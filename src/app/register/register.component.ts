import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerOptions = [
    {
      title: 'Participants',
      subtitle: 'Register a solo/team',
      description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla register a team',
      link: 'https://forms.gle/B6JfpPMqnf3DsNUV9'
    },
    {
      title: 'NGOs',
      subtitle: 'Register an idea',
      description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla register an idea',
      link: 'https://forms.gle/1sqK7wu6BefY4mc77'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
