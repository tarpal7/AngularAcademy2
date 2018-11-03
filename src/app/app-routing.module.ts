import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {FormPageComponent} from './form-page/form-page.component';
import {ItemPageComponent} from './item-page/item-page.component';
import {AuthGuard} from './auth-guard.service';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  {path: 'formitem', component: FormPageComponent},
  {path: '', component: HomePageComponent},
  {path: 'gallery/:id', component: ItemPageComponent },

];



@NgModule({
  imports:  [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
