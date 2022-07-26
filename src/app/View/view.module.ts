import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { CommitModule } from './commit/commit.module';
import { ReposModule } from './repos/repos.module';
import { WrapperComponent } from '../Components/wrapper/wrapper.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from '../Components/table/table.component';
import { ReposComponent } from './repos/repos.component';
import { CommitComponent } from './commit/commit.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { SearchService } from '../services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from '../Components/search-box/search-box.component';


const components = [WrapperComponent, TableComponent, ReposComponent, CommitComponent, HomeComponent, SearchBoxComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [...components],
  providers: [SearchService]
})
export class ViewModule { }
