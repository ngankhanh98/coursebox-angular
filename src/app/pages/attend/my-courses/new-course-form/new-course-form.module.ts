import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCourseFormComponent } from './new-course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/@shared/shared.module';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [NewCourseFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class NewCourseFormModule {}
