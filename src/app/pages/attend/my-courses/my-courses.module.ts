import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { MyCoursesComponent } from './my-courses.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [MyCoursesComponent],
  imports: [CommonModule, ThemeModule, NbButtonModule],
})
export class MyCoursesModule {}
