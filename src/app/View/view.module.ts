import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { CommitModule } from './commit/commit.module';
import { ReposModule } from './repos/repos.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReposModule,
    CommitModule,
  ]
})
export class ViewModule { }
