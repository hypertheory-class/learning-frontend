import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface LearningResourceSummary {
  id: string;
  title: string;
}

export interface ResourceSummaryState
  extends EntityState<LearningResourceSummary> {}

export const adapter = createEntityAdapter<LearningResourceSummary>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(initialState);
