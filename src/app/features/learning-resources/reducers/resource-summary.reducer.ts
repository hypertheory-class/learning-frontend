import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/learning-summary.actions';
export interface LearningResourceSummary {
  id: string;
  title: string;
}

export interface ResourceSummaryState
  extends EntityState<LearningResourceSummary> {}

export const adapter = createEntityAdapter<LearningResourceSummary>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(actions.loadResourceSummariesSuccceeded, (s, a) =>
    adapter.setAll(a.payload, s)
  )
);
