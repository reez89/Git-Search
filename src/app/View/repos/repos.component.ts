import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchService } from 'src/app/search.service';
import { Item, ReposInterface } from '../../Interfaces/repos-response.interface'



@Component({
  selector: 'app-routes',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent {

  ELEMENT_DATA: Item[] = [];
  searchValue: string = '';
  starsValue?: number;
  language?:string; 
  dataSource: any;
  isLoading : boolean = false;


  constructor(public s: SearchService) { }

  searchRepos() {
    this.isLoading = true;
    this.s.getRepos(this.searchValue, this.starsValue, this.language).subscribe((item: ReposInterface) => {
      this.ELEMENT_DATA = item.items;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
      this.isLoading = false ;
    });
  }

}
