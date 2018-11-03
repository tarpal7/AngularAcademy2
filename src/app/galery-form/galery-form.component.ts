import {Component, Output, EventEmitter} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {SnackBarOverviewComponent} from '../snack-bar-overview/snack-bar-overview.component';

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

  constructor(private GalleryServ: GalleryService, public SnackBar: SnackBarOverviewComponent) {
  }

  @Output() messageEvent = new EventEmitter<object>();

  sendMessage() {

    this.curid = (new Date()).getTime();
    this.objadd = {
      id: this.curid,
      title: this.valueTitle,
      url: this.myValue,
    };
    this.messageEvent.emit(this.objadd);
    this.GalleryServ.receiveMessage(this.objadd);
  }

  addItem() {
    this.curid = (new Date()).getTime();
    this.objadd = {
   //   id: this.curid,
      title: this.valueTitle,
      url: this.myValue,
    };

    this.GalleryServ.addItemToServer(this.objadd).subscribe((json) => {
      console.log(json),
      this.SnackBar.openSnackBar('has been added picture', this.objadd.title );
    });


  }

}



