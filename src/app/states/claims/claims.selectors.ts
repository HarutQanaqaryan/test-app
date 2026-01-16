import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { ClaimsState, UserState } from 'app/models';

const selectClaims = (state: AppState) => state.claims;

export const selectClaimsList = createSelector(
  selectClaims,
  (state: ClaimsState) => state.claims
);

export const selectCurrentClaim = createSelector(
  selectClaims,
  (state: ClaimsState) => state.currentClaim
);
