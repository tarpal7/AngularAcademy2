import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GalleryService} from "../gallery.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  id: number;
  linkimage: string;
  title: string;
  items: any;

  constructor(private route: ActivatedRoute, private http: GalleryService) {

  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {

      console.log(params);
      this.id = +params['id'];
      this.linkimage = params['url'];
      this.title = params['title'];
    });


    this.http.getAllFromServer().subscribe(items => {
      this.items = items;
      console.log(this.id);
      this.linkimage = this.items [0].url;
      console.log(this.linkimage);

      this.items.forEach((item, index) => {
        if (item.id == this.id) {
          this.linkimage = item.url;
          this.title = item.title;
        }
      });
    });
  }
}
