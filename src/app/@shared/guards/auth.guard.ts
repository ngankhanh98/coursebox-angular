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
  isLoggedIn: boolean;

  constructor(private authQuery: AuthQuery, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.authQuery.isLoggedIn$.subscribe((isLoggedIn) => {
      if (!isLoggedIn)
        this.router.navigate(['/auth/login'], {
          queryParams: { returnUrl: state.url },
        });
      this.isLoggedIn = isLoggedIn;
    });

    return this.isLoggedIn;
  }
}
