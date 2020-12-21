import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { SharedModule } from '../@shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail/course-detail.component';
// import { HttpHelper } from 'app/@core/helpers';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [PagesComponent, CourseDetailComponent],
})
export class PagesModule {}
