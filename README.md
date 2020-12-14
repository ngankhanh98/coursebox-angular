## Backlog
#### Short description of what this resolves:
- [ ] Login
    - [x] Auto direct to `/dashboard`
    - [x] Store authenticated information in state
    - [ ] Store token in cookies/local storage

- [ ] Dashboard
    - [x] Protected route by guard (using token in state)
    - [x] `/my-courses`
        - [x] Load my courses (using Akita query)
        - [x] Add new course
            - [ ] Khi tạo thành công 1 course, em nên call API get List lại, vì nếu system mà ko chỉ có e dùng, tức là nhiều người thêm vào nữa, thì việc call API sẽ giải quyết van de dồng bộ data mới hơn
    - [x] `/enrolled-course`
        - [x] Load my enrolled courses
        - [x] Enroll myself to a course
    - [x] `{{courseId}}` - view course detail

#### TODO: Validation
- [ ] /my-courses: cannot enroll to my own course
- [ ] /enrolled-courses: 
    - [ ] cannot enroll after you're in a course
    - [ ] enrolled courses list have to automatically update

#### TODO: api
- [x] GET /courses: khi call API get list e nên sort DESC theo ngày tạo.
- [ ] GET /courses/{{courseId}}: full information: courseId, title, teacher, users[]

