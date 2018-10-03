import {Component, Input, Output, EventEmitter} from '@angular/core';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
  @Input() item: object;

  @Output() onChanged = new EventEmitter<number>();

  constructor(private GalleryService: GalleryService) {
  };

  change(id: number) {
    this.GalleryService.onChanged(id);
  }

}
