import { Component, OnInit } from '@angular/core';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from 'app/pages/state/course';
import { CourseQuery } from 'app/pages/state/course.query';
import { CourseService } from 'app/pages/state/course.service';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

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

  constructor(
    private courseQuery: CourseQuery,
    private authQuery: AuthQuery,
    private courseService: CourseService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.getMyCourses();
  }

  getMyCourses() {
    this.userId$.subscribe((res) => (this.userId = res));
    if (!this.courseQuery.getCount()) this.courseService.loadCourses();
    this.myCourses$ = this.courseQuery.selectAll({
      filterBy: (course) => course.teacher.userId === this.userId,
    });
  }

  open() {
    this.dialogService
      .open(NewCourseFormComponent)
      .onClose.subscribe((values) => values && this.addCourse(values.title));

      this.courseService.loadCourses()
  }
  addCourse(title) {
    this.courseService.addCourse(title);
  }
}
