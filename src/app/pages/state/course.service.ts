import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'app/auth/state/auth';
import { AuthQuery } from 'app/auth/state/auth.query';
import { Course } from './course';
import { CourseStore } from './course.store';

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

  public addCourse(values) {
    const route = '/course';

    let teacher: Auth;
    this.authQuery.selectFirst().subscribe((result) => (teacher = result));

    const course: Partial<Course> = {
      ...values,
      teacher: teacher,
    };

    return this.httpClient.post<Course>(route, course).subscribe((res) =>
      this.courseStore.add({
        ...res,
        courseId: res['courseId'],
        users: [],
      })
    );
  }

  public getCourseByCourseId(courseId: string) {
    const route = `/course/${courseId}`;
    return this.httpClient.get<Course>(route);
  }

  public enroll(courseId: string, accessToken: string) {
    const route = `/user/enroll?roleId=member&courseId=${courseId}`;
    const header = { 'access-token': accessToken };

    return this.httpClient
      .post(route, {}, { headers: header })
      .subscribe((res) => {
        // get own user
        let member;
        this.authQuery
          .selectAll({ filterBy: (e) => e.userId === res['userId'] })
          .subscribe((users) => (member = users));

        // get enrollment from a course
        const enrollment = this.courseStore.getValue().entities[courseId].users;

        this.courseStore.update((entity) => entity.courseId === courseId, {
          users: [...enrollment, ...member],
        });
      });
  }

  public unenroll(courseId: string, userId: string) {
    const route = `/course/${courseId}/${userId}`;

    return this.httpClient.delete(route).subscribe((res) => {
      if (res['affected']) {
        const remainUsers = this.courseStore
          .getValue()
          .entities[courseId].users.filter((user) => user.userId !== userId);

        this.courseStore.update((course) => course.courseId === courseId, {
          users: remainUsers,
        });
      }
    });
  }

  public deleteCourse(courseId: string) {
    const route = `/course/${courseId}`;

    return this.httpClient.delete(route).subscribe(() => {
      this.courseStore.remove((e) => e['courseId'] === courseId);
      this.router.navigate(['/dashboard/explore']);
    });
  }
}
