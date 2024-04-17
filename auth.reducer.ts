import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  token: string | null;
}

export const initialState: State = {
  token: null
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { token }) => ({ ...state, token: token })),
  on(AuthActions.logout, state => ({ ...state, token: null }))
);
