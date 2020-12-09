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
  isLoggedIn$: boolean;
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.authQuery.isLoggedIn$.subscribe((arg) => {
      this.isLoggedIn$ = arg;
    //   console.log('arg', arg);
      if (!arg) this.router.navigate(['/auth/login']);
    });
    return this.isLoggedIn$;
  }
}
