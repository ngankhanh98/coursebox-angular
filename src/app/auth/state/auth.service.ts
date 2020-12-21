import { Injectable } from '@angular/core';
import { HttpHelper } from 'app/@core/helpers/http.helper';
import { Auth } from './auth';
import { AuthQuery } from './auth.query';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string;
  user$ = this.authQuery.selectFirst();

  constructor(
    private authStore: AuthStore,
    private httpHelper: HttpHelper,
    private authQuery: AuthQuery
  ) {}

  private ADD_STATE(user) {
    this.authStore.add(user);
  }

  private REMOVE_STATE(userId) {
    this.authStore.remove(userId);
  }
  private UPDATE_STATE(userId, prop: Partial<Auth>) {
    this.authStore.update((entity) => entity.userId === userId, { ...prop });
  }

  login({ username, password }) {
    const route = '/auth/login';
    const data = { username: username, password: password };

    return this.httpHelper._postData(route, data, {}, (res) =>
      this.ADD_STATE(res)
    );
  }

  logout() {
    this.user$.subscribe((user) => this.REMOVE_STATE(user.userId));
  }

  // FIXME: isssues/6
  deleteAccount() {
    const route = '/user';
    let header;
    this.user$.subscribe(
      (user) => (header = { 'access-token': user.accessToken })
    );

    return this.httpHelper._deleteData(route, header, () => this.logout());
  }

  requestPassword() {
    const route = '/auth/forgot-password';

    const setResetPwdToken = (res) => {
      let userId: string;
      this.user$.subscribe((user) => (userId = user.userId));
      const resetPwdToken: Partial<Auth> = {
        resetPwdToken: res['resetPwdToken'],
      };
      this.UPDATE_STATE(userId, resetPwdToken);
    };

    let header;
    this.user$.subscribe((user) => (header = { username: user.username }));

    return this.httpHelper._fetchData(route, header, setResetPwdToken);
  }

  changePassword(password: any) {
    let resetPwdToken;
    this.user$.subscribe((user) => (resetPwdToken = user.resetPwdToken));

    const route = `/auth/reset-password?token=${resetPwdToken}`;

    return this.httpHelper._postData(
      route,
      { password: password },
      {},
      () => {}
    );
  }
}
