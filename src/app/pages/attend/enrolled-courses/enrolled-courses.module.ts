import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolledCoursesComponent } from './enrolled-courses.component';
import { ThemeModule } from 'app/@theme/theme.module';


// Hello
@NgModule({
  declarations: [EnrolledCoursesComponent],
  imports: [
    CommonModule, ThemeModule
  ]
})
export class EnrolledCoursesModule { }
