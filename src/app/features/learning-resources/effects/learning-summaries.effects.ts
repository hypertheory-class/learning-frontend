import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as actions from '../actions/learning-summary.actions';
import { LearningResourceSummary } from '../reducers/resource-summary.reducer';
@Injectable()
export class LearningResourceSummaryEffects {
  // load -> loadSucceeded | loadFailed
  readonly baseUrl = environment.apiUrl + 'v1/resources/';

  loadData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.loadResourceSummaries), // go to the api, return the data.
        switchMap(() =>
          this.client
            .get<{ data: LearningResourceSummary[] }>(
              this.baseUrl + 'learning-resources'
            )
            .pipe(
              map((response) => response.data),
              map((payload) =>
                actions.loadResourceSummariesSuccceeded({ payload })
              )
            )
        )
      ),
    { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) {}
}
