import { Component, OnInit } from '@angular/core';
import { Course } from '../state/course';
import { CourseQuery } from '../state/course.query';
import { CourseService } from '../state/course.service';

@Component({
  selector: 'ngx-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private courseQuery: CourseQuery
  ) {}
  courses: Course[] = [];
  ngOnInit(): void {
    this.getAllCourses();
    this.courseQuery.allBrowseCourses$.subscribe((arg) => {
      console.log('arg', arg);
      this.courses = arg;
    });
  }

  getAllCourses() {
    this.courseService.loadCourses();
  }
}
