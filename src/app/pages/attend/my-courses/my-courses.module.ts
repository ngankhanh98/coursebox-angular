import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import { MyCoursesComponent } from './my-courses.component';

@NgModule({
  declarations: [MyCoursesComponent],
  imports: [CommonModule, ThemeModule],
})
export class MyCoursesModule {}
