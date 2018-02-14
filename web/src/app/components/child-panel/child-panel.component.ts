import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-child-panel',
  templateUrl: './child-panel.component.html',
  styleUrls: ['./child-panel.component.css']
})
export class ChildPanelComponent implements OnInit {
  isChild: boolean;
  childConvId: string;
  childUserId: string;

  constructor(
    private windowService: WindowService,
  ) {
    const window = this.windowService.getNativeWindow();
    const ids = window.name;
    // console.log('child window', ids);
    this.isChild = true;
    this.childConvId = ids.split(',')[0];
    this.childUserId = ids.split(',')[1];
  }

  ngOnInit() {
  }

}
