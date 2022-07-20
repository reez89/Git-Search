import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './View/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    loadChildren: () => import('./View/view.module').then(m => m.ViewModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
