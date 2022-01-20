import { createAction } from '@ngrx/store';

// Action Creators - little functions that create actions for you!
export const countIncremented = createAction(
  '[counter component] count incremented'
);

export const countDecremented = createAction(
  '[counter component] count decremented'
);

export const countReset = createAction('[counter component] count reset');
