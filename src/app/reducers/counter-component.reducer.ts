import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter-component.actions';

export interface CounterComponentState {
  current: number;
}

const initialState: CounterComponentState = {
  current: 0,
};

export const reducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (currentState) => ({
    ...currentState,
    current: currentState.current + 1,
  })),
  on(actions.countDecremented, (currentState) => ({
    ...currentState,
    current: currentState.current - 1,
  }))
);
