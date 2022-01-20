import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLearningResourceSummaryItems } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  model$ = this.store.select(selectLearningResourceSummaryItems);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
