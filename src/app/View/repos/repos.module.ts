import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos.component';
import { TableComponent } from 'src/app/Components/table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SearchService } from '../../services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [ReposComponent, TableComponent, HomeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [ReposComponent],
  providers: [SearchService]
})
export class ReposModule { }
