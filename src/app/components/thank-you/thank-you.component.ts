import { Component, OnInit } from '@angular/core';
import { ThankYouCardCreate, ThankYouCardModel } from 'src/app/models';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent implements OnInit {
  listTitle = 'Your Thank-You Card List';
  private lastId = 4;
  cardList: ThankYouCardModel[] = [
    { id: '1', to: 'Joe', reason: 'Mowed Lawn', sent: false },
    { id: '2', to: 'Sue', reason: 'Cleaned Car', sent: false },
    {
      id: '3',
      to: 'Mel',
      reason: 'Planted Flowers',
      sent: true,
      when: '2022-01-19T19:04:23.186Z',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addItem(item: ThankYouCardCreate) {
    const itemToAdd = {
      ...item,
      id: (this.lastId++).toString(),
      sent: false,
    } as ThankYouCardModel;

    this.cardList = [itemToAdd, ...this.cardList];
  }
}
