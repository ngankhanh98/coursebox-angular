import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import { EnrolledCoursesComponent } from './enrolled-courses.component';
@NgModule({
  declarations: [EnrolledCoursesComponent],
  imports: [CommonModule, ThemeModule],
})
export class EnrolledCoursesModule {}
