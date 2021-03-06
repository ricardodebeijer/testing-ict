import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app root index page';
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };


  isChild = true;
  childUserId = 'AejQxW5MAOQkclVsaWqj0lFB8cn2';
  childConvId = 'fqPXPLklIVZEGlMXYxyw';
  public showWindow: boolean;
  public isDraggable: boolean;


  constructor() {
    this.showWindow = false;
    this.isDraggable = true;
  }

  toggleWindow() {
    this.showWindow = !this.showWindow;
  }

  toggleDraggable() {
    this.isDraggable = !this.isDraggable;
  }
}
