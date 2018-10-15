import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GaleryFormComponent } from './galery-form/galery-form.component';
import {GalleryService} from './gallery.service';
import {HttpClientModule} from '@angular/common/http';

import { FormPageComponent } from './form-page/form-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from '@angular/http';





@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    GaleryFormComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

