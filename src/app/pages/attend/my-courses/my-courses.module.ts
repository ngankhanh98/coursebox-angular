import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { MyCoursesComponent } from './my-courses.component';
import { PipeModule } from '../../pipes/pipe.module';
@NgModule({
  declarations: [MyCoursesComponent],
  imports: [CommonModule, ThemeModule, NbButtonModule, PipeModule],
})
export class MyCoursesModule {}
