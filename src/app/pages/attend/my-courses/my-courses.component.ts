import { Component, OnInit } from '@angular/core';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from 'app/pages/state/course';
import { CourseQuery } from 'app/pages/state/course.query';
import { CourseService } from 'app/pages/state/course.service';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  loading$ = this.courseQuery.selectLoading();

  myCourses$ = this.authQuery.selectFirst().pipe(
    switchMap((user) =>
      user
        ? this.courseQuery.selectAll({
            filterBy: (entity) => entity.teacher.userId === user.userId,
          })
        : this.courseQuery.selectAll()
    )
  );

  constructor(
    private courseQuery: CourseQuery,
    private authQuery: AuthQuery,
    private courseService: CourseService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {}

  open() {
    this.dialogService
      .open(NewCourseFormComponent)
      .onClose.subscribe((values) => values && this.addCourse(values.title));

    this.courseService.loadCourses();
  }
  addCourse(title) {
    this.courseService.addCourse(title);
  }
}
