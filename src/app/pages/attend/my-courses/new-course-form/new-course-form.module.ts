import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCourseFormComponent } from './new-course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from 'app/@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [NewCourseFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class NewCourseFormModule {}
