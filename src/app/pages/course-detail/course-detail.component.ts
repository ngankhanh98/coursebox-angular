import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthQuery } from 'app/auth/state/auth.query';
import { CourseService } from '../state/course.service';

@Component({
  selector: 'ngx-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  courseId = this.route.snapshot.paramMap.get('courseId');
  course$ = this.courseService.getCourseByCourseId(this.courseId);
  token$ = this.authQuery.selectFirst((entity) => entity.token);
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private authQuery: AuthQuery
  ) {}

  ngOnInit(): void {
  }

  onEnroll() {
    let accessToken: string;
    this.token$.subscribe((token) => (accessToken = token));
    return this.courseService.enroll(this.courseId, accessToken);
  }
}
