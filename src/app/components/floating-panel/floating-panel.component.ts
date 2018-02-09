import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { UserMock } from '../../user-mock';

@Component({
  selector: 'app-floating-panel',
  templateUrl: './floating-panel.component.html',
  styleUrls: ['./floating-panel.component.css']
})
export class FloatingPanelComponent implements OnInit {
  public showWindow: boolean;
  public isDraggable: boolean;
  constructor(private windowService: WindowService) {
    this.showWindow = false;
    this.isDraggable = false;
  }

  ngOnInit() {
  }

  toggleWindow() {
    this.showWindow = !this.showWindow;
  }

  toggleDraggable() {
    this.isDraggable = !this.isDraggable;
  }

  openChild() {
    const randomID = UserMock.randomIntFromInterval(1, 100000);
    this.windowService.createChildWindow(randomID);
  }
}
