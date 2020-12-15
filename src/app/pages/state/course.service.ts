import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHelper } from 'app/@core/helpers';
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
    private authQuery: AuthQuery,
    private httpHelper: HttpHelper
  ) {}

  public loadCourses() {
    const route = '/course';
    const addCourseToState = (res) => this.courseStore.set(res);

    return this.httpHelper._fetchData(route, {}, addCourseToState);
  }

  public addCourse(title) {
    let teacher: Auth;
    this.authQuery.selectFirst().subscribe((result) => (teacher = result));

    const course: CreateCourseDto = {
      title: title,
      teacher: teacher,
    };
    // return this.http
    //   .post<Course>('http://localhost:3000/v1/course', course)
    //   .subscribe((res) => {
    //     const affectedCourse: Course = {
    //       ...course,
    //       courseId: res['courseId'],
    //       users: [],
    //     };
    //     this.courseStore.add(affectedCourse);
    //   });

    const route = '/course';
    const addNewCorseToState = (res) => {
      const newCourse: Course = {
        ...course,
        courseId: res['courseId'],
        users: [],
      };
      this.courseStore.add(newCourse);
    };
    return this.httpHelper._postData(route, course, {}, addNewCorseToState);
  }

  getCourseByCourseId(courseId: string) {
    return this.httpHelper._fetchData$(`/course/${courseId}`, {});
  }

  enroll(courseId: string, accessToken: string) {
    const route = `/user/enroll?roleId=member&courseId=${courseId}`;
    const header = { 'access-token': accessToken };
    const reloadCourses = () => this.loadCourses();
    return this.httpHelper._postData(route, {}, header, reloadCourses);
    // return this.http
    //   .post(
    //     `http://localhost:3000/v1/user/enroll?roleId=member&courseId=${courseId}`,
    //     {},
    //     { headers: { 'access-token': accessToken } }
    //   )
    //   .subscribe(() => this.loadCourses());
  }
}
