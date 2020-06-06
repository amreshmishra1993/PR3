import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Dragger } from './dragger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  components: string[];
  containers: string[];

  constructor(private dragger: Dragger) {}
  ngOnInit() {
    this.components = this.dragger.components;
    this.containers = this.dragger.containers;
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      this.dragger.dragDrop(
        event.previousContainer.data,
        event.previousIndex,
        event.container.data,
        event.currentIndex
      );
    }
  }
}
