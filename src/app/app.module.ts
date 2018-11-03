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
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import { ItemPageComponent } from './item-page/item-page.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import { HomePageComponent } from './home-page/home-page.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatIconModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarOverviewComponent } from './snack-bar-overview/snack-bar-overview.component';
import {CourseDialogComponent} from './course-dialog/course-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
    GaleryFormComponent,
    FormPageComponent,
    ItemPageComponent,
    HomePageComponent,
    SnackBarOverviewComponent,
    CourseDialogComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    FlexLayoutModule

  ],
  entryComponents: [
    CourseDialogComponent
  ],
exports: [CourseDialogComponent],
  providers: [GalleryService, AuthService, AuthGuard, SnackBarOverviewComponent, CourseDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

