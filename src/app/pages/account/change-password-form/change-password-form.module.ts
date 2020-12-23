import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { SharedModule } from 'app/@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSpinnerModule,
    CommonModule,
    SharedModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [],
  //   declarations: [ChangePasswordFormComponent],
  providers: [],
})
class ChangePasswordFormModule {}
