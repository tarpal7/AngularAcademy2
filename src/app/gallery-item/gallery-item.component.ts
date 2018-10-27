import {Component, Input, Output, EventEmitter} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {GalleryComponent} from "../gallery/gallery.component";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
  @Input() item: object;

  @Output() onChanged = new EventEmitter<number>();

  constructor(private GalleryService: GalleryService, private GalleryComponent: GalleryComponent) {
  };

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

}
