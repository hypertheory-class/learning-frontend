import { Action } from '@ngrx/store';

export interface CounterComponentState {
  current: number;
}

const initialState: CounterComponentState = {
  current: 0,
};
export function reducer(
  state: CounterComponentState = initialState,
  action: Action
): CounterComponentState {
  switch (action.type) {
    case 'count incremented': {
      return { ...state, current: state.current + 1 };
    }
    case 'count decremented': {
      return { ...state, current: state.current - 1 };
    }
    default:
      return state;
  }
}
