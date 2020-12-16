import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHelper } from 'app/@core/helpers';
import { Auth } from 'app/auth/state/auth';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Observable } from 'rxjs';
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

  enroll(courseId: string, accessToken: string, callback: () => any) {
    const route = `/user/enroll?roleId=member&courseId=${courseId}`;
    const header = { 'access-token': accessToken };
    return this.httpHelper._postData(route, {}, header, callback);
  }

  unenroll(courseId: string, userId: string, callback: () => any) {
    const route = `/course/${courseId}/${userId}`;
    return this.httpHelper._deleteData(route, callback);
  }

  deleteCourse(courseId: string) {
    const route = `/course/${courseId}`;
    const deleteCourseFromState = () =>
      this.courseStore.remove((e) => e['courseId'] === courseId);
    return this.httpHelper._deleteData(route, deleteCourseFromState);
  }
}
