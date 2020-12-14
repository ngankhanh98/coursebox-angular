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
      teacher: teacher,
    };
    return this.http
      .post<Course>('http://localhost:3000/v1/course', randomCourse)
      .subscribe((res) => {
        const affectedCourse: Course = {
          ...randomCourse,
          courseId: res['courseId'],
          users: [],
        };
        this.courseStore.add(affectedCourse);
      });
  }

  public addCourse(title) {
    let teacher: Auth;
    this.authQuery.selectFirst().subscribe((result) => (teacher = result));

    const course: CreateCourseDto = {
      title: title,
      teacher: teacher,
    };
    return this.http
      .post<Course>('http://localhost:3000/v1/course', course)
      .subscribe((res) => {
        const affectedCourse: Course = {
          ...course,
          courseId: res['courseId'],
          users: [],
        };
        this.courseStore.add(affectedCourse);
      });
  }

  getCourseByCourseId(courseId: string) {
    return this.http.get<Course>(`http://localhost:3000/v1/course/${courseId}`);
  }

  enroll(courseId: string, accessToken: string) {
    console.log('enroll');
    return this.http.post(
      `http://localhost:3000/v1/user/enroll?roleId=member&courseId=${courseId}`,
      {},
      { headers: { 'access-token': accessToken } }
    ).subscribe(res=>console.log('res', res));
  }
}
