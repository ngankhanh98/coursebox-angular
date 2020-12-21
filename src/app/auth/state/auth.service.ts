import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string;
  user$ = this.authQuery.selectFirst();

  constructor(
    private authStore: AuthStore,
    private authQuery: AuthQuery,
    private httpClient: HttpClient
  ) {}

  public login({ username, password }) {
    const route = '/auth/login';

    return this.httpClient
      .post<Auth>(route, { username: username, password: password })
      .subscribe((user) => {
        this.authStore.add(user);
      });
  }

  logout() {
    this.authStore.remove();
  }

  // FIXME: isssues/6
  deleteAccount() {
    const route = '/user';

    let header;
    this.user$.subscribe(
      (user) => (header = { 'access-token': user.accessToken })
    );

    return this.httpClient
      .delete(route, { headers: header })
      .subscribe(() => this.logout());
  }

  requestPassword() {
    const route = '/auth/forgot-password';

    let userId, username;
    this.authQuery.selectFirst().subscribe((e) => {
      (userId = e.userId), (username = e.username);
    });

    const header = { username: username };

    return this.httpClient.get(route, { headers: header }).subscribe((res) => {
      this.authStore.update((entity) => entity.userId === userId, {
        resetPwdToken: res['resetPwdToken'],
      });
    });
  }

  changePassword(password: any) {
    this.requestPassword();
    this.authQuery.selectFirst().subscribe((user) => {
      const route = `/auth/reset-password?token=${user.resetPwdToken}`;

      return this.httpClient
        .post(route, { password: password })
        .subscribe(() => this.logout());
    });
  }
}
