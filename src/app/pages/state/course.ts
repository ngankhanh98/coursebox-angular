import { Auth } from 'app/auth/state/auth';

export interface Course {
  courseId: string;
  title: string;
  teacher: Auth;
}
