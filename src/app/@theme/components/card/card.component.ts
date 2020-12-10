import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() teacher: string;
  @Input() coverImage: string;

  constructor() {}

  ngOnInit(): void {}
}
