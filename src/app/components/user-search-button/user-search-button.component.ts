import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserSearchModalComponent } from '../user-search-modal/user-search-modal.component';

@Component({
  selector: 'app-user-search-button',
  templateUrl: './user-search-button.component.html',
  styleUrls: ['./user-search-button.component.css']
})
export class UserSearchButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserSearchModalComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
