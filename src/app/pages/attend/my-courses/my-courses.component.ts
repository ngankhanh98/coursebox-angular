import { Component, OnInit } from '@angular/core';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from 'app/pages/state/course';
import { CourseQuery } from 'app/pages/state/course.query';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngx-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  loading$ = this.courseQuery.selectLoading();
  userId: string;
  userId$ = this.authQuery.selectFirst((entity) => entity.userId);

  myCourses$: Observable<Course[]>;

  constructor(private courseQuery: CourseQuery, private authQuery: AuthQuery) {}

  ngOnInit(): void {
    this.getMyCourses();
  }

  getMyCourses() {
    this.userId$.subscribe((res) => (this.userId = res));
    this.myCourses$ = this.courseQuery.selectAll({
      filterBy: (course) => course.teacher.userId === this.userId,
    });
  }
}
