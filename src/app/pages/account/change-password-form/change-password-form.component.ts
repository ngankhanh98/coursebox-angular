import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent implements OnInit {
  @Output() changePasswordReq = new EventEmitter<string>();
  @Input() response;
  loading = false;
  error: string;
  changePasswordForm = new FormGroup({
    password: new FormControl(''),
    passwordagain: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}

  onChangePassword() {
    this.loading = true;
    this.response = false;
    this.error = null;

    const { password, passwordagain } = this.changePasswordForm.value;
    if (password && password === passwordagain)
      this.changePasswordReq.emit(password);
    else {
      this.error = 'Error occured';
      this.loading = false;
    }
  }
}
