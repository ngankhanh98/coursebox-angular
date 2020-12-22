import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { CourseState, CourseStore } from './course.store';

@Injectable({ providedIn: 'root' })
@QueryConfig({
  sortBy: 'createdAt',
  sortByOrder: Order.DESC,
})
export class CourseQuery extends QueryEntity<CourseState> {
  constructor(protected courseStore: CourseStore) {
    super(courseStore);
  }
}
