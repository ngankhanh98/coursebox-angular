import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CourseService } from '../state/course.service';

@Component({
  selector: 'ngx-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  courseId = this.route.snapshot.paramMap.get('courseId');
  userId: string;
  course$ = this.courseService.getCourseByCourseId(this.courseId);
  token$ = this.authQuery.selectFirst((entity) => entity.token);
  userId$ = this.authQuery.selectFirst((entity) => entity.userId);

  allowEnroll$: Observable<object>;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private authQuery: AuthQuery
  ) {}

  ngOnInit(): void {
    this.onLoad();
  }

  onEnroll() {
    let accessToken: string;
    this.token$.subscribe((token) => (accessToken = token));
    const reloadMyEnrolledCourses = () => this.onLoad()
    return this.courseService.enroll(this.courseId, accessToken, reloadMyEnrolledCourses);
  }

  onLoad() {
    this.userId$.subscribe((userid) => (this.userId = userid));
    this.allowEnroll$ = this.course$.pipe(
      filter((e) => e['users'].findIndex((x) => x['userId'] === this.userId))
    );

    this.allowEnroll$.subscribe((res) => console.log('res', res));
  }

  onUnenroll() {
    const reloadMyEnrolledCourses = () => this.onLoad()
    return this.courseService.unenroll(this.courseId, this.userId, reloadMyEnrolledCourses);
  }
}
