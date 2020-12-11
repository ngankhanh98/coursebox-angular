import { Auth } from 'app/auth/state/auth';

export interface CreateCourseDto {
  title: string;
  teacher: Auth; // removed later
}
