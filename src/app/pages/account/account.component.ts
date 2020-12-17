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

  constructor(private authQuery: AuthQuery, private authService: AuthService) {}

  ngOnInit(): void {
  }

  onRequestPassword(password) {
    let username: string;
    this.authState$.subscribe((user) => (username = user.username));

    this.authService.onRequestPassword(username);
    this.authService.onChangePassword(password);
  }

  onDeleteAccount() {
    this.authService.onDeleteAccount();
  }
}
