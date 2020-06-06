import { transferArrayItem } from '@angular/cdk/drag-drop';

export class Dragger {
  components: string[] = [
    'Header',
    'Table',
    'Footer',
    'Time',
    'Spinner',
    'Textbox',
    'Button',
    'Divider',
    'Mask',
  ];
  containers: string[] = [];
  dragDrop(
    prevdata: string[],
    prevIndex: number,
    currentData: string[],
    currentIndex: number
  ) {
    transferArrayItem(prevdata, currentData, prevIndex, currentIndex);
    currentData.splice(1, 1);
    prevdata.splice(prevIndex, 0, currentData[currentIndex]);
  }
}
