import {Component, Output, EventEmitter} from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-galery-form',
  templateUrl: './galery-form.component.html',
  styleUrls: ['./galery-form.component.css']
})

export class GaleryFormComponent {
  objadd: object;
  myValue: string;
  valueTitle: string;
  isRequired = true;
  private curid;
  constructor (private GalleryService: GalleryService){};
  @Output() messageEvent = new EventEmitter<object>();

  sendMessage() {
    console.log(this.myValue);
    console.log(this.valueTitle);
    this.curid = (new Date()).getTime();
    this.objadd = {
      id: this.curid,
      title: this.valueTitle,
      url: this.myValue,
    }
    this.messageEvent.emit(this.objadd);
    this.GalleryService.receiveMessage(this.objadd);
  }



}
