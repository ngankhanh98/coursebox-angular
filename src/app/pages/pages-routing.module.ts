import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ExploreComponent } from './explore/explore.component';
import { EnrolledCoursesComponent } from './attend/enrolled-courses/enrolled-courses.component';
import { MyCoursesComponent } from './attend/my-courses/my-courses.component';
import { AccountComponent } from './account/account.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'explore', component: ExploreComponent },
      {
        path: 'attend',
        children: [
          {
            path: 'enrolled-courses',
            component: EnrolledCoursesComponent,
          },
          {
            path: 'my-courses',
            component: MyCoursesComponent,
          },
        ],
      },
      { path: 'account', component: AccountComponent },
      {
        path: ':courseId',
        pathMatch: 'full',
        component: CourseDetailComponent,
      },
    ],
  },

  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
