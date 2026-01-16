import { createAction, props } from '@ngrx/store';
import { IClaim } from 'app/models';

export const setClaims = createAction(
  '[Claim Component] Get Claims',
  props<{ claims: IClaim[] }>()
);

export const setCurrentClaim = createAction(
  '[Claims Component] Set Claim',
  props<{ currentClaim: IClaim }>()
);

export const clearCurrentClaim = createAction('[Claims Component] Clear Claim');

export const editingClaims = createAction(
  '[Claims Component] Change Claim',
  props<{ claims: IClaim[] }>()
);
