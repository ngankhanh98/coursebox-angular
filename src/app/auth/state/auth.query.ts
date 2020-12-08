// import { Injectable } from '@angular/core';
// import { Query } from '@datorama/akita';
// import { AuthState, AuthStore } from './auth.store';

// @Injectable({ providedIn: 'root' })
// export class AuthQuery extends Query<AuthState> {
//   // FIXME: selectFirst return nonsense

//   allState$ = this.select();
//   isLoggedIn$ = this.select((state) => !!state.token);
//   constructor(protected authStore: AuthStore) {
//     super(authStore);
//   }
// }

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends QueryEntity<AuthState> {
  // FIXME: selectFirst return nonsense

  allState$ = this.select();
  isLoggedIn$ = this.selectFirst((state) => !!state.token);
  constructor(protected authStore: AuthStore) {
    super(authStore);
  }
}
