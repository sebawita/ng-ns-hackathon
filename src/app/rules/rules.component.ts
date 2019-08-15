import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  start = new Date(Date.UTC(2019, 8, 12, 8, 0));
  end = new Date(Date.UTC(2019, 8, 16, 7, 59));
}
