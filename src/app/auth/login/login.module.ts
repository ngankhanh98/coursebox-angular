import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbUserModule,
} from "@nebular/theme";

import { SharedModule } from "../../@shared/shared.module";
import {
  FormsModule as ngFormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { LoginComponent } from "./login.component";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbSpinnerModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
