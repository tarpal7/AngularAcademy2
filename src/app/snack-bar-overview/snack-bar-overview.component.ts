import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-snack-bar-overview',
  templateUrl: './snack-bar-overview.component.html',
  styleUrls: ['./snack-bar-overview.component.css']
})
export class SnackBarOverviewComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
