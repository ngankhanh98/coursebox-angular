import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/state/auth.service';
import { CourseQuery } from '../state/course.query';
import { CourseService } from '../state/course.service';

@Component({
  selector: 'ngx-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  courses$ = this.courseQuery.selectAll();
  loading$ = this.courseQuery.selectLoading();

  constructor(
    private courseService: CourseService,
    private courseQuery: CourseQuery
  ) {}

  ngOnInit(): void {
    this.courseService.loadCourses();
  }
}
