import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Auth } from './auth';

export interface AuthState extends EntityState<Auth, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', idKey: 'username' })
export class AuthStore extends EntityStore<AuthState> {
  constructor() {
    super();
  }
}
