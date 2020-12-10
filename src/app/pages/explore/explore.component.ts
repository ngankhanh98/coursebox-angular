import { Component, OnInit } from '@angular/core';
import { CourseQuery } from './state/course.query';
import { CourseService } from './state/course.service';

@Component({
  selector: 'ngx-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  courses$ = this.courseQuery.allBrowseCourses$;
  loading$ = this.courseQuery.selectLoading();

  constructor(
    private courseService: CourseService,
    private courseQuery: CourseQuery
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.loadCourses();
  }
}
