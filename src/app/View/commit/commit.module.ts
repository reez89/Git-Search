import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitComponent } from './commit.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [CommitComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CommitModule { }
