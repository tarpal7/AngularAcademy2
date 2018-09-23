import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent  {
  @Input() item: object;

  @Output() onChanged = new EventEmitter<number>();


  change(id:any) {
    this.onChanged.emit(id);
  //  alert(id);
  }

}
