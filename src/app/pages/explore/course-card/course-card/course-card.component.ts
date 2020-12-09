import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() title: string;
  @Input() teacher: string;
  @Input() coverImage: string;

  constructor() {}

  ngOnInit(): void {}
}
