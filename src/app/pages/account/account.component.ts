import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {}

  onRequestPassword(password) {
    this.authState$.subscribe((user) => {
      this.authService.onRequestPassword(user.username);
      this.authService.onChangePassword(password);
    });
  }

  onDeleteAccount() {
    this.authService.onDeleteAccount();
  }
}
