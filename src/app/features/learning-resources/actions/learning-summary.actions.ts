import { createAction, props } from '@ngrx/store';
import { LearningResourceSummary } from '../reducers/resource-summary.reducer';

// "Initator" - command.
export const loadResourceSummaries = createAction(
  '[learning resources] load resource summaries'
);
// "Success" - This is the action that will be dispatched with the data

export const loadResourceSummariesSuccceeded = createAction(
  '[learning resources] load resource summaries succeeded',
  props<{ payload: LearningResourceSummary[] }>()
);
// "Failure" - What if it fails?
