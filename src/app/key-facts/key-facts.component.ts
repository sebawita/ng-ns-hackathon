import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-facts',
  templateUrl: './key-facts.component.html',
  styleUrls: ['./key-facts.component.scss']
})
export class KeyFactsComponent implements OnInit {

  keyFacts = [
    { title: 'Team Size', description: '1-4 people'},
    { title: 'Stack', description: 'Angular and NativeScript'},
    { title: 'Dates', description: '12-15 September'},
    { title: 'Location', description: 'Online'},
    { title: 'Prizes', description: '2000 USD, Kendo UI licenses and more'},
    { title: 'Objective', description: 'Do Good'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
