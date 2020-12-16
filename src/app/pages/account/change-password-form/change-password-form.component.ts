import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent implements OnInit {
  @Output() changePasswordReq = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onChangePassword(password, passwordAgain) {
    if (password === passwordAgain) this.changePasswordReq.emit(password);
  }
}
