import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitComponent } from './commit/commit.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [

  {
    path: 'repos' , 
    component: ReposComponent
  },
  {
    path: 'commits/:author/:repository' , 
    component: CommitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
