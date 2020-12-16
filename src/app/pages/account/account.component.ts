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
  username: string;

  constructor(
    private authQuery: AuthQuery,
    private route: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authState$.subscribe((user) => (this.username = user.username));
  }

  onRequestPassword(password) {
    // this.route.navigate(['../../auth/request-password']);
    this.authService.onRequestPassword(this.username);

    this.authService.onChangePassword(password);
  }

  onDeleteAccount() {
    this.authService.onDeleteAccount();
  }
}
