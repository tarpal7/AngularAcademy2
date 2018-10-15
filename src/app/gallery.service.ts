import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {Item} from './item';


@Injectable({
  providedIn: 'root',
})

export class GalleryService {

  private serverUrl = 'http://localhost:3000/gallery';


  constructor(private http: HttpClient) {
    // if (this.getFromLS(this.keyStorage).length) {
    //   this.items = this.getFromLS(this.key);
    // } else {
    //   this.items = this.itemsStart;
    //   this.saveInLocalSorage(this.items, this.key);
    // }
  }


  key: string = 'gallery';
  keyStorage: string = 'gallery';
  items = [];
  itemsStart = [
    {
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://placekitten.com/200/198",
    },
    {
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://placekitten.com/200/202",
    },
    {
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://placekitten.com/200/203",
    },
    {
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://placekitten.com/200/204",
    },
    {
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://placekitten.com/200/205",
    },
    {
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://placekitten.com/200/206",
    },
    {
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://placekitten.com/200/207",
    },
    {
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://placekitten.com/200/208",
    },
    {
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://placekitten.com/200/209",
    },
    {
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://placekitten.com/200/200",
    }
  ];

//local array


  onChanged(increased: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (increased === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
    if (this.getFromLS(this.keyStorage)) {
      this.removeFromLS(this.keyStorage);
    }
    this.saveInLocalSorage(this.items, this.keyStorage);
  }

  receiveMessage($event) {
    this.items.unshift($event);
    if (this.getFromLS(this.keyStorage)) {
      this.removeFromLS(this.keyStorage);
    }
    this.saveInLocalSorage(this.items, this.keyStorage);

  }

 //localStorage

  saveInLocalSorage(obj, nameObject: string) {
    let sObj: string = JSON.stringify(obj);
    localStorage.setItem(nameObject, sObj);
  }

  removeFromLS(nameObject: string) {
    localStorage.removeItem(nameObject);
  }

  getFromLS(nameObject: string) {
    return JSON.parse(localStorage.getItem(nameObject));
  }

  //Server


  getAllFromServer() {
    return this.http.get<any[]>(this.serverUrl);
  }

  addItemToServer(obj) {
    return this.http.post(this.serverUrl, obj);
  }

  deleteFromServer(obj: any){
    return this.http.delete(`${this.serverUrl}/${obj.id}` );
  }


  getFromServerItemId(id){

    return this.http.get<any>(`${this.serverUrl}/${id}` ).subscribe(res => res.json
      );
  }



}
