import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../gallery-item/gallery-item.component';


// export interface DialogData {
//  title: string;
//   url: string;
// }
@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {


  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
