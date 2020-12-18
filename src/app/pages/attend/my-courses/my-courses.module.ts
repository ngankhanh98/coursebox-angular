import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';
import { SharedModule } from 'app/@shared/shared.module';
import { MyCoursesComponent } from './my-courses.component';
@NgModule({
  declarations: [MyCoursesComponent],
  imports: [CommonModule, SharedModule, NbButtonModule],
})
export class MyCoursesModule {}
