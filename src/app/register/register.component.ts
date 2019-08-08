import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerOptions = [
    {
      title: 'Participants',
      subtitle: 'Register a solo/team',
      description: 'Are you excited about the hackacthon and want to make the world a better place? Sign up here.',
      link: 'https://forms.gle/B6JfpPMqnf3DsNUV9'
    },
    {
      title: 'NGOs',
      subtitle: 'Register an idea',
      description: 'If you work for an NGO, then this is a great opportunity to share your idea with us.',
      link: 'https://forms.gle/1sqK7wu6BefY4mc77'
    },
  ];
}
