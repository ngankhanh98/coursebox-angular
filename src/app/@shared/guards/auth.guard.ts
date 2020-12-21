import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authQuery: AuthQuery, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.authQuery
      .selectFirst((entity) => !!entity.accessToken)
      .subscribe((hasToken) => {
        if (!hasToken)
          this.router.navigate(['/auth/login'], {
            queryParams: { returnUrl: state.url },
          });
      });

    return true;
  }
}
