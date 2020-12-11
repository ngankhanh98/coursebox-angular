import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CourseState, CourseStore } from './course.store';

@Injectable({ providedIn: 'root' })
export class CourseQuery extends QueryEntity<CourseState> {
  allBrowseCourses$ = this.selectAll();
  courseByTeacher$ = (userId) =>
    this.selectEntity((e) => e.teacher.userId === userId);

  constructor(protected courseStore: CourseStore) {
    super(courseStore);
  }
}
