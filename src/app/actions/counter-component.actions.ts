import { createAction, props } from '@ngrx/store';

// Action Creators - little functions that create actions for you!
export const countIncremented = createAction(
  '[counter component] count incremented'
);

export const countDecremented = createAction(
  '[counter component] count decremented'
);

export const countReset = createAction('[counter component] count reset');

export const countBySet = createAction(
  '[counter component] count by set',
  props<{ by: number }>()
);
