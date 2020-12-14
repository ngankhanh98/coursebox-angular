## Backlog
#### Short description of what this resolves:
- [ ] Login
    - [x] Auto direct to `/dashboard`
    - [x] Store authenticated information in state
    - [ ] Store token in cookies/local storage

- [ ] Dashboard
    - [x] Protected route by guard (using token in state)
    - [ ] `/my-courses`
        - [x] Load my courses (using Akita query)
        - [ ] Add new course
    - [ ] `/enrolled-course`
        - [ ] Load my enrolled courses
        - [ ] Enroll myself to a course
