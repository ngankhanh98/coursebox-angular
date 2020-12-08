import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { CourseCardComponent } from './course-card/course-card/course-card.component';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [ExploreComponent, CourseCardComponent],
  imports: [CommonModule, NbCardModule],
})
export class ExploreModule {}
