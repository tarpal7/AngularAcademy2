import {Component, Input, Output, EventEmitter} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {GalleryComponent} from "../gallery/gallery.component";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CourseDialogComponent} from "../course-dialog/course-dialog.component";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {


  name: string;

  picture: string;

  @Input() item: object;

  @Output() onChanged = new EventEmitter<number>();

  constructor(private GalleryService: GalleryService, private GalleryComponent: GalleryComponent, private dialog: MatDialog) {
  }

  change(id: number) {
    this.GalleryService.onChanged(id);
  }

  deleteItem(obj) {
    console.log(obj.id);
    this.GalleryService.deleteFromServer(obj.id).subscribe(id => console.log('delete item',
      this.GalleryComponent.showAll(),
      console.log(this.GalleryService.getAllFromServer()),
      this.GalleryService.items = this.GalleryService.items.filter(c => c.id !== obj.id)
    //  this.change(obj.id)
    ));
  }


  showItem(obj) {

    console.log(obj);
    this.GalleryService.getFromServerItemId(obj);

  }

  openDialog(obj): void {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '450px',
      data: {name: obj.title, picture: obj.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.url = result;
    });
  }

}
