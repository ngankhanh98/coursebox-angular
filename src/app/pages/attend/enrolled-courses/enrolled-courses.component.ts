import { Component, OnInit } from '@angular/core';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from 'app/pages/state/course';
import { CourseQuery } from 'app/pages/state/course.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss'],
})
export class EnrolledCoursesComponent implements OnInit {
  loading$ = this.courseQuery.selectLoading();
  enrolledCourses$: Observable<Course[]>;

  userId$ = this.authQuery.selectFirst((entity) => entity.userId);
  userId: string;

  constructor(private courseQuery: CourseQuery, private authQuery: AuthQuery) {}

  ngOnInit(): void {
    this.getMyEnrolledCourses()
  }

  getMyEnrolledCourses() {
    this.userId$.subscribe((res) => (this.userId = res));
    this.enrolledCourses$ = this.courseQuery.selectAll({
      filterBy: (course) =>
        course.users.findIndex((user) => user.userId === this.userId) !== -1,
    });
  }
}
