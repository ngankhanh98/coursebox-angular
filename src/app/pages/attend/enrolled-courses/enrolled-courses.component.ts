import { Component, OnInit } from '@angular/core';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from 'app/pages/state/course';
import { CourseQuery } from 'app/pages/state/course.query';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss'],
})
export class EnrolledCoursesComponent implements OnInit {
  loading$ = this.courseQuery.selectLoading();

  enrolledCourses$ = this.authQuery.selectFirst().pipe(
    switchMap((user) =>
      user
        ? this.courseQuery.selectAll({
            filterBy: (course) =>
              course.users.findIndex(
                (member) => member.userId === user.userId
              ) !== -1,
          })
        : this.courseQuery.selectAll()
    )
  );

  constructor(private courseQuery: CourseQuery, private authQuery: AuthQuery) {}

  ngOnInit(): void {}
}
