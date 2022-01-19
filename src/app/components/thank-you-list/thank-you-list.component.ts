import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThankYouCardModel } from 'src/app/models';

@Component({
  selector: 'app-thank-you-list',
  templateUrl: './thank-you-list.component.html',
  styleUrls: ['./thank-you-list.component.css'],
})
export class ThankYouListComponent implements OnInit {
  @Input() list: ThankYouCardModel[] | null = [];
  @Input() caption = 'Your List of Thank You Cards';
  @Output() cardSent = new EventEmitter<ThankYouCardModel>();
  constructor() {}

  ngOnInit(): void {}

  markAsSent(card: ThankYouCardModel) {
    this.cardSent.emit(card);
  }
}
