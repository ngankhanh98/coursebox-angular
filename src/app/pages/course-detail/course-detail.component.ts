import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CourseQuery } from '../state/course.query';
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
  users$ = this.courseQuery.selectFirst((entity) => entity.users);

  allowEnroll$: Observable<object>;
  allowDelete$: Observable<object>;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private authQuery: AuthQuery,
    private courseQuery: CourseQuery
  ) {}

  ngOnInit(): void {
    this.onLoad();
  }

  onEnroll() {
    let accessToken: string;
    this.token$.subscribe((token) => (accessToken = token));

    const reloadMyEnrolledCourses = () => {
      this.courseService.loadCourses();
      this.onLoad();
    };

    return this.courseService.enroll(
      this.courseId,
      accessToken,
      reloadMyEnrolledCourses
    );
  }

  onLoad() {
    this.userId$.subscribe((userid) => (this.userId = userid));

    this.allowEnroll$ = this.course$.pipe(
      filter((e) => e['users'].findIndex((x) => x['userId'] === this.userId))
    );

    this.allowDelete$ = this.course$.pipe(
      filter((e) => e['teacher']['userId'] === this.userId)
    );
  }

  onUnenroll() {
    const reloadMyEnrolledCourses = () => {
      this.courseService.loadCourses();
      this.onLoad();
    };

    return this.courseService.unenroll(
      this.courseId,
      this.userId,
      reloadMyEnrolledCourses
    );
  }

  onDeleteCourse() {
    return this.courseService.deleteCourse(this.courseId);
  }
}
