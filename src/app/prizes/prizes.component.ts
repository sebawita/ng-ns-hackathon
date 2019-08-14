import { Component } from '@angular/core';

interface Category {
  name: string;
  description: string;
  prizes: Prize[];
}

interface Prize {
  name: string;
  prize: string;
}

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent {
  categories: Category[] = [
    {
      name: 'Judges Favorite',
      description: 'Score will be awarded by the judges and calculated based on Innovation, Design and Utility.',
      prizes: [
        { name: 'Winner', prize: '2000 USD' },
        { name: '2x Honorary Mention', prize: '500 USD' },
      ]
    },
    {
      name: 'Hacker Favorite',
      description: 'Popularity score will be calculated based on the number of votes an entry gets from other participants.',
      prizes: [
        { name: '3x Winner', prize: '500 USD' },
      ]
    },
    {
      name: 'Design Winner',
      description: 'Best score for category of "Design"',
      prizes: [
        { name: 'Winner', prize: '500 USD' },
      ]
    },
    {
      name: 'Innovation Winner',
      description: 'Best score for category of "Innovation"',
      prizes: [
        { name: 'Winner', prize: '500 USD' },
      ]
    },
    {
      name: 'Utility Winner',
      description: 'Best score for category of "Utility"',
      prizes: [
        { name: 'Winner', prize: '500 USD' },
      ]
    },
  ];
}
