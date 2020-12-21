import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/@shared/shared.module';
import { EnrolledCoursesComponent } from './enrolled-courses.component';
@NgModule({
  declarations: [EnrolledCoursesComponent],
  imports: [CommonModule, SharedModule],
})
export class EnrolledCoursesModule {}
