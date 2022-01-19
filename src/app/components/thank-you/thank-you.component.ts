import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThankYouCardCreate, ThankYouCardModel } from 'src/app/models';
import { GiftsDataService } from 'src/app/services/gifts-data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent implements OnInit {
  listTitle = 'Your Thank-You Card List';
  cardList$: Observable<ThankYouCardModel[]> = this.service.getAll();
  constructor(private service: GiftsDataService) {}

  ngOnInit(): void {}

  addItem(item: ThankYouCardCreate) {
    this.service.addItem(item);
  }

  markAsSent(card: ThankYouCardModel) {
    this.service.cardSent(card);
  }
}
