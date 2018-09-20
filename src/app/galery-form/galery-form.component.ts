import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-form',
  templateUrl: './galery-form.component.html',
  styleUrls: ['./galery-form.component.css']
})
export class GaleryFormComponent {

  fieldsForm = ['field1', 'field2' ];
  submitted = false;
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.fieldsForm); }

}
