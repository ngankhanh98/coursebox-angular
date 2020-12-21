import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'app/auth/state/auth';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from './course';
import { CourseStore } from './course.store';
import { CreateCourseDto } from './dto/course.dto';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(
    private courseStore: CourseStore,
    private authQuery: AuthQuery,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  public loadCourses() {
    const route = '/course';

    return this.httpClient
      .get<Course[]>(route)
      .subscribe((courses) => this.courseStore.set(courses));
  }

  public addCourse(title) {
    let teacher: Auth;
    this.authQuery.selectFirst().subscribe((result) => (teacher = result));

    const course: CreateCourseDto = {
      title: title,
      teacher: teacher,
    };

    const route = '/course';
    
    return this.httpClient.post<Course>(route, course).subscribe((course) =>
      this.courseStore.add({
        ...course,
        courseId: course['courseId'],
        users: [],
      })
    );
  }

  getCourseByCourseId(courseId: string) {
    return this.httpClient.get<Course>(`/course/${courseId}`);
  }

  enroll(courseId: string, accessToken: string, callback: () => void) {
    const route = `/user/enroll?roleId=member&courseId=${courseId}`;
    const header = { 'access-token': accessToken };

    return this.httpClient
      .post(route, {}, { headers: header })
      .subscribe(callback);
  }

  unenroll(courseId: string, userId: string, callback: () => any) {
    const route = `/course/${courseId}/${userId}`;

    return this.httpClient.delete(route).subscribe(callback);
  }

  deleteCourse(courseId: string) {
    const route = `/course/${courseId}`;

    return this.httpClient.delete(route).subscribe(() => {
      this.courseStore.remove((e) => e['courseId'] === courseId);
      this.router.navigate(['/dashboard/explore']);
    });
  }
}
