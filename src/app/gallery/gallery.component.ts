import {Component, OnInit, Input} from '@angular/core';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent {
  key: string = 'gallery';
  constructor(private GalleryService: GalleryService) {

 console.log(GalleryService.getFromLS(GalleryService.keyStorage).length);
// console.log(GalleryService.getFromLS(this.key))
    if (GalleryService.getFromLS(GalleryService.keyStorage).length) {
      GalleryService.items = GalleryService.getFromLS(this.key);
    } else {
      GalleryService.items = GalleryService.itemsStart;
      GalleryService.saveInLocalSorage(GalleryService.items, this.key);
    }

  }



// message: string;


}
