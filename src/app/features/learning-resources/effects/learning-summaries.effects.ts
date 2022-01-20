import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as actions from '../actions/learning-summary.actions';
import { LearningResourceSummary } from '../reducers/resource-summary.reducer';
@Injectable()
export class LearningResourceSummaryEffects {
  // load -> loadSucceeded | loadFailed

  private readonly fakeSummaries: LearningResourceSummary[] = [
    { id: '1', title: 'NGRX For Profit' },
    { id: '2', title: 'Docker for Dummies' },
    { id: '3', title: 'Kubernetes' },
  ];
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadResourceSummaries), // go to the api, return the data.
      map(() =>
        actions.loadResourceSummariesSuccceeded({ payload: this.fakeSummaries })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
