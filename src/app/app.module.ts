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
import { ItemPageComponent } from './item-page/item-page.component';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import { HomePageComponent } from './home-page/home-page.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatIconModule} from "@angular/material";




@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    GaleryFormComponent,
    FormPageComponent,
    ItemPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
MatIconModule

  ],
  providers: [GalleryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

