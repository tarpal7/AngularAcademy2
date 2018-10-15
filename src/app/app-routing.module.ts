import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {FormPageComponent} from "./form-page/form-page.component";

const appRoutes: Routes = [
  {path: 'gallery', component: GalleryComponent },
  {path: 'formitem', component: FormPageComponent}

];



@NgModule({
  imports:  [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
