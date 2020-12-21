import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthQuery } from 'app/auth/state/auth.query';
import { switchMap } from 'rxjs/operators';
import { CourseQuery } from '../state/course.query';
import { CourseService } from '../state/course.service';

@Component({
  selector: 'ngx-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  courseId = this.route.snapshot.paramMap.get('courseId');
  userId = this.authQuery.getAll()[0].userId;
  token = this.authQuery.getAll()[0].accessToken;

  course$ = this.courseService.getCourseByCourseId(this.courseId);
  users$ = this.courseQuery.selectEntity((e) => e.courseId === this.courseId);

  isMember$ = this.authQuery.selectFirst().pipe(
    switchMap((user) =>
      user
        ? this.courseQuery.selectAll({
            filterBy: (course) =>
              course.users.findIndex((x) => x.userId === user.userId) !== -1 &&
              course.courseId === this.courseId,
          })
        : null
    )
  );

  isTeacher$ = this.authQuery.selectFirst().pipe(
    switchMap((user) =>
      user
        ? this.courseQuery.selectAll({
            filterBy: (course) =>
              course.teacher.userId === user.userId &&
              course.courseId === this.courseId,
          })
        : null
    )
  );

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private authQuery: AuthQuery,
    private courseQuery: CourseQuery
  ) {}

  ngOnInit(): void {}

  onEnroll() {
    const reloadMyEnrolledCourses = () => {
      this.courseService.loadCourses();
    };

    return this.courseService.enroll(
      this.courseId,
      this.token,
      reloadMyEnrolledCourses
    );
  }

  onUnenroll() {
    const reloadMyEnrolledCourses = () => {
      this.courseService.loadCourses();
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
