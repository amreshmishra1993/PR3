import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RightContainerComponent } from './right-container/right-container.component';

import { Dragger } from './dragger.service';

@NgModule({
  declarations: [AppComponent, RightContainerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [Dragger],
  bootstrap: [AppComponent],
})
export class AppModule {}
