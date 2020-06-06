import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css'],
})
export class RightContainerComponent implements OnInit {
  @Input('containerItem') item: string;

  constructor() {}

  ngOnInit(): void {}
}
