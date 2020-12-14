import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, ThemeModule, NbMenuModule, MiscellaneousModule],
  declarations: [PagesComponent, CourseDetailComponent],
})
export class PagesModule {}
