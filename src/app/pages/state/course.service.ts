import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'app/auth/state/auth';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from './course';
import { CourseStore } from './course.store';
import { CreateCourseDto } from './dto/course.dto';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(
    private http: HttpClient,
    private courseStore: CourseStore,
    private authQuery: AuthQuery
  ) {}

  public loadCourses() {
    return this.http
      .get<Course[]>('http://localhost:3000/v1/course')
      .subscribe((res) => {
        this.courseStore.set(res);
      });
  }

  public addRandomCourse() {
    let teacher: Auth;
    this.authQuery.selectFirst().subscribe((result) => (teacher = result));

    const randomCourse: CreateCourseDto = {
      title: 'Random course',
      teacher: teacher
    };
    return this.http
      .post<Course>('http://localhost:3000/v1/course', randomCourse)
      .subscribe((res) => {
        const affectedCourse: Course = {
          ...randomCourse,
          courseId: res['courseId'],
        };
        this.courseStore.add(affectedCourse);
      });
  }
}
