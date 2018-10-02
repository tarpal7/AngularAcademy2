import {Component, OnInit, Input} from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent {

  constructor (private GalleryService: GalleryService){};
 // message: string;

 

  onChanged(increased: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (increased === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
  }

  receiveMessage($event) {
 //   this.message = $event;
 //   console.log($event);
    this.items.unshift($event);

  }



}
