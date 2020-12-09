import { Component, OnInit } from '@angular/core';
import { Course } from '../state/course';
import { CourseQuery } from '../state/course.query';
import { CourseService } from '../state/course.service';

@Component({
  selector: 'ngx-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  courses: Course[] = [];

  // courses$ = this.courseQuery.allBrowseCourses$;

  constructor(
    private courseService: CourseService,
    private courseQuery: CourseQuery
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
    this.courseQuery.allBrowseCourses$.subscribe((arg) => {
      // console.log('arg', arg);
      //   this.courses = arg;
      this.courses = arg;
      // console.log('this.courses', this.courses);
    });
  }

  getAllCourses() {
    this.courseService.loadCourses();
  }
}

// without state
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Course } from '../state/course';

// @Component({
//   selector: 'ngx-explore',
//   templateUrl: './explore.component.html',
//   styleUrls: ['./explore.component.scss'],
// })
// export class ExploreComponent implements OnInit {
//   constructor(
//     private http: HttpClient
//   ) {}
//   courses: Course[] = [];
//   ngOnInit(): void {
//     this.http
//       .get<Course[]>('http://localhost:3000/v1/course')
//       .subscribe((res) => {
//         console.log('res', res);
//         this.courses = res;
//       });
//   }
// }
