import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from './my-courses.component';
import { ThemeModule } from 'app/@theme/theme.module';

@NgModule({
  declarations: [MyCoursesComponent],
  imports: [CommonModule, ThemeModule],
})
export class MyCoursesModule {}
