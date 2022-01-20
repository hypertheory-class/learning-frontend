import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromModels from '../models';
import * as fromResourceSummaries from './resource-summary.reducer';
export const featureName = 'learningResourcesFeature';

export interface LearningResourcesState {
  resourceSummaries: fromResourceSummaries.ResourceSummaryState;
}

export const reducers: ActionReducerMap<LearningResourcesState> = {
  resourceSummaries: fromResourceSummaries.reducer,
};

// 1. Create a Feature Selector
const selectFeature =
  createFeatureSelector<LearningResourcesState>(featureName);

// 2. One per branch
const selectResourceSummaryBranch = createSelector(
  selectFeature,
  (f) => f.resourceSummaries
);
// 3. Helpers
const { selectAll: selectAllLearningResourceSummaries } =
  fromResourceSummaries.adapter.getSelectors(selectResourceSummaryBranch);
// 4. What your Component Needs.
// fromModels.LearningResourceSummaryItem[]

export const selectLearningResourceSummaryItems = createSelector(
  selectAllLearningResourceSummaries,
  (summaries) => summaries as fromModels.LearningResourceSummaryItem[]
);
