import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

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
  // @Output() clickChange = new EventEmitter<string>();


  @Output() messageEvent = new EventEmitter<object>();
  sendMessage() {

    console.log(this.myValue);
    console.log(this.valueTitle);
    this.curid = (new Date()).getTime();
    this.objadd =  {
      id: this.curid,
      title: this.valueTitle,
      url: "https://placekitten.com/200/204",
       }
    this.messageEvent.emit(this.objadd);



  }



  // var re = new RegExp("^(http|https)://", "i");
  // var str = "My String";
  // var match = re.test(str);dhtvtyyjq



}
