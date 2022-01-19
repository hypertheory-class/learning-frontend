import { Component, Input, OnInit } from '@angular/core';
import { ThankYouCardModel } from 'src/app/models';

@Component({
  selector: 'app-thank-you-list',
  templateUrl: './thank-you-list.component.html',
  styleUrls: ['./thank-you-list.component.css'],
})
export class ThankYouListComponent implements OnInit {
  @Input() list: ThankYouCardModel[] = [];
  @Input() caption = 'Your List of Thank You Cards';
  constructor() {}

  ngOnInit(): void {}
}
