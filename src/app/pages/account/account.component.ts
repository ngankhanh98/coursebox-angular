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
  response$ = this.authQuery.select('success');
  constructor(private authQuery: AuthQuery, private authService: AuthService) {}

  ngOnInit(): void {
  }

  requestPassword(password) {
    this.authService.changePassword(password);
  }

  deleteAccount() {
    this.authService.deleteAccount();
  }
}
