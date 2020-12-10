import { Component, OnInit } from '@angular/core';
import { CourseQuery } from 'app/pages/state/course.query';
@Component({
  selector: 'ngx-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  // FIXME: fix server (/v1/course retrieve courses with teacher)
  course$ = this.courseQuery.allBrowseCourses$;
  constructor(private courseQuery: CourseQuery) {}

  ngOnInit(): void {}
}
