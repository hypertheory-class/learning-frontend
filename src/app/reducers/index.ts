import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounterComponent from './counter-component.reducer';

// configuration for the store module.

// to make typescript happy
export interface AppState {
  counterComponent: fromCounterComponent.CounterComponentState;
}

// this is for our StoreModule to tell it what the data looks like we want to keep track of
export const reducers: ActionReducerMap<AppState> = {
  counterComponent: fromCounterComponent.reducer,
};

// Selector Functions

// 1. Create a feature selector (we aren't in a feature, so we'll skip this step)

// 2. Create one that can get to each branch of the application state.

// 3. Helpers? (optional)

// 4. Export the selector functions that the components need.

export const selectCounterCurrent = (state: AppState) =>
  state.counterComponent.current;

export const selectShouldCounterResetBeDisabled = createSelector(
  selectCounterCurrent,
  (c: number) => c === 0
);
