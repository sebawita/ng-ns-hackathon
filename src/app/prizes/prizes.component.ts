import { Component } from '@angular/core';

interface Category {
  name: string;
  description: string;
  prize: string;
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
  mainCategories: Category[] = [
    {
      name: 'Judges Favorite',
      description: 'Score will be awarded by the judges and calculated based on Innovation, Design and Utility.',
      prize: '1500 USD',
    },
    {
      name: 'Hacker Favorite',
      description: 'Popularity score will be calculated based on the number of votes an entry gets from other participants.',
      prize: '1000 USD',
    },
  ];

  subcategories: Category[] = [
    {
      name: 'Design Winner',
      description: 'Best score for category of "Design"',
      prize: '500 USD',
    },
    {
      name: 'Innovation Winner',
      description: 'Best score for category of "Innovation"',
      prize: '500 USD',
    },
    {
      name: 'Utility Winner',
      description: 'Best score for category of "Utility"',
      prize: '500 USD',
    },
  ];
}
