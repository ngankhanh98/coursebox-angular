import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends QueryEntity<AuthState> {
  allState$ = this.select();
  isLoggedIn$ = this.selectFirst((state) => !!state.token);
  constructor(protected authStore: AuthStore) {
    super(authStore);
  }
}
