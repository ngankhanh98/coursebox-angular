import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent implements OnInit {
  @Output() changePasswordReq = new EventEmitter<string>();

  changePasswordForm = new FormGroup({
    password: new FormControl(''),
    passwordagain: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}

  onChangePassword() {
    const { password, passwordagain } = this.changePasswordForm.value;
    if (password === passwordagain) this.changePasswordReq.emit(password);
  }
}
