import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthQuery } from 'app/auth/state/auth.query';
import { AuthService } from 'app/auth/state/auth.service';

@Component({
  selector: 'ngx-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  authState$ = this.authQuery.selectFirst();

  constructor(
    private authQuery: AuthQuery,
    private route: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authState$.subscribe((res) => console.log('res', res));
  }

  onRequestPassword(password) {
    console.log('password', password);
    // this.route.navigate(['../../auth/request-password']);
  }

  onDeleteAccount() {
    this.authService.onDeleteAccount();
  }
}
