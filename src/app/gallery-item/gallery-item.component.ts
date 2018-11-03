import {Component, Input, Output, EventEmitter} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {GalleryComponent} from '../gallery/gallery.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';

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

  @Output() nChanged = new EventEmitter<number>();

  constructor(private GalleryServ: GalleryService, private GalleryCompon: GalleryComponent, private dialog: MatDialog) {
  }

  change(id: number) {
    this.GalleryServ.nChanged(id);
  }

  deleteItem(obj) {
    console.log(obj.id);
    this.GalleryServ.deleteFromServer(obj.id).subscribe(id => console.log('delete item',
      this.GalleryCompon.showAll(),
      console.log(this.GalleryServ.getAllFromServer()),
      this.GalleryServ.items = this.GalleryServ.items.filter(c => c.id !== obj.id)
    //  this.change(obj.id)
    ));
  }


  showItem(obj) {

    console.log(obj);
    this.GalleryServ.getFromServerItemId(obj);

  }

  openDialog(obj): void {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '450px',
      data: {name: obj.title, picture: obj.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
