import {Component, Output, EventEmitter} from '@angular/core';

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

  }

}
