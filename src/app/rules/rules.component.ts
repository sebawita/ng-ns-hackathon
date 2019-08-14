import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  // start = new Date('12-Sep-2019 10:00 GMT+2');
  start = new Date(2019, 8, 12, 10, 0, 0, 0);
  // end = new Date('16-Sep-2019 9:59 GMT+2');
  end = new Date(2019, 8, 16, 9, 59, 0, 0);
}
