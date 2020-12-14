import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss'],

})
export class NewCourseFormComponent {
  constructor(protected dialogRef: NbDialogRef<NewCourseFormComponent>) {}

  cancel() {
    this.dialogRef.close();
  }

  submit(title, description) {
    this.dialogRef.close({ title, description });
  }
}
