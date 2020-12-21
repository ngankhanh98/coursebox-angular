import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { SharedModule } from 'app/@shared/shared.module';
import { AccountComponent } from './account.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
@NgModule({
  declarations: [AccountComponent, ChangePasswordFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule {}
