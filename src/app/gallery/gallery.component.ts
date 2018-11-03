import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  items = [];

  constructor(private http: HttpClient, public GalleryServ: GalleryService) {
  }

  ngOnInit() {

    // localStorage
    //  this.items = this.GalleryService.items;

    this.GalleryServ.getAllFromServer().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }


  showAll() {
    this.GalleryServ.getAllFromServer().subscribe(items => {
      console.log(items);
      this.items = items;
    });


  }
}
