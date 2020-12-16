## Backlog
#### Short description of what this resolves:
- [ ] Login
    - [x] Auto direct to `/dashboard`
    - [x] Store authenticated information in state
    - [ ] Store token in cookies/local storage

- [x] Dashboard
    - [x] Protected route by guard (using token in state)
    - [x] `/my-courses`
        - [x] Load my courses (using Akita query)
        - [x] Add new course
            - [x] Khi tạo thành công 1 course, em nên call API get List lại, vì nếu system mà ko chỉ có e dùng, tức là nhiều người thêm vào nữa, thì việc call API sẽ giải quyết van de dồng bộ data mới hơn
    - [x] `/enrolled-course`
        - [x] Load my enrolled courses
        - [x] Enroll myself to a course
    - [x] `{{courseId}}` - view course detail

#### TODO: Validation
- [ ] /dashboard/:courseId
    - [x] one who enrolled course must not enroll again (enroll button disabled)
    - [x] one who enrolled course can unenroll (unenroll button appear)
    - [ ] one who create course must not enroll to this course (enroll button disabled)
    - [ ] one who create course can delete course (delete button appear)
    - [ ] show members and teacher (fix api)
- [ ] search
- [ ] /account    
- [ ] /logout
- [ ] /forgot-password
- [ ] /

#### TODO: api
- [x] GET /courses: khi call API get list e nên sort DESC theo ngày tạo.
- [ ] GET /courses/{{courseId}}: full information: courseId, title, teacher, users[]

