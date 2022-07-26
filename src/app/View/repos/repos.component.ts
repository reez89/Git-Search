import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Item, ReposInterface } from '../../Interfaces/repos-response.interface'



@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent {

  elementData: Item[] = [];
  searchValue: string = '';
  starsValue?: number;
  language?: string;
  dataSource: any;
  isLoading: boolean = false;


  constructor(public searchService: SearchService, private router: Router) {}

  public searchRepos() {
    this.isLoading = true;
    this.searchService.getRepos(this.searchValue, this.starsValue, this.language).subscribe((item: ReposInterface) => {
      this.elementData = item.items;
      this.dataSource = new MatTableDataSource(this.elementData)
      this.isLoading = false;
    });
  }

  public goToCommit(e: any) {
    this.searchService.goToRepo(e.owner.login, e.name).subscribe(item => {
      this.router.navigate([`commits/${item.owner.login}/${item.name}`])
    }
    )
  }

}
