import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadResourceSummaries } from './actions/learning-summary.actions';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.css'],
})
export class LearningResourcesComponent implements OnInit {
  constructor(store: Store) {
    store.dispatch(loadResourceSummaries());
  }

  ngOnInit(): void {}
}
