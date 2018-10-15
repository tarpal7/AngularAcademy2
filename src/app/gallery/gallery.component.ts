import {Component, OnInit, Input} from '@angular/core';
import {GalleryService} from '../gallery.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent {
  items =[];
  constructor(private http: HttpClient, private GalleryService: GalleryService) {
  }

  ngOnInit() {

    //localStorage
    //  this.items = this.GalleryService.items;

   this.GalleryService.getAllFromServer().subscribe(items => {
    console.log(items);
    this.items = items;
    });
  }
}
