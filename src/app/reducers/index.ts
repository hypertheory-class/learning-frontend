import { ActionReducerMap } from '@ngrx/store';
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
