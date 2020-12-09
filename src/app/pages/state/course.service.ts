import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { CourseStore } from './course.store';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient, private courseStore: CourseStore) {}

  public loadCourses() {
    // FIXME: not know if it works
    return this.http
      .get<Course[]>('http://localhost:3000/v1/course')
      .subscribe((res) => {
        // console.log('res', res);

        // FIXME: only add the last res
        this.courseStore.set(res);
      });
  }
}
