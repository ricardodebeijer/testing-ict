import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FloatingPanelComponent } from '../floating-panel/floating-panel.component';

@Component({
  selector: 'app-floating-panel-button',
  templateUrl: './floating-panel-button.component.html',
  styleUrls: ['./floating-panel-button.component.css']
})
export class FloatingPanelButtonComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(FloatingPanelComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
