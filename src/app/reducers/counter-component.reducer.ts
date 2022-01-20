import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter-component.actions';

export interface CounterComponentState {
  current: number;
  by: number;
}

const initialState: CounterComponentState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by })),
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (currentState) => ({
    ...currentState,
    current: currentState.current + currentState.by,
  })),
  on(actions.countDecremented, (currentState) => ({
    ...currentState,
    current: currentState.current - currentState.by,
  }))
);
