import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import { AttendModule } from '../attend.module';
import { EnrolledCoursesComponent } from './enrolled-courses.component';
import { PipeModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [EnrolledCoursesComponent],
  imports: [CommonModule, ThemeModule, AttendModule, PipeModule],
})
export class EnrolledCoursesModule {}
