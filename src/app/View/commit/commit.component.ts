import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Commit, CommmitResponse } from 'src/app/Interfaces/commit-response.interface';
import { SingleRepoResponse } from 'src/app/Interfaces/single-repo-response.interface';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {

  repository!: SingleRepoResponse ;
  commits: Commit[] = [];
  author!: string;
  repoName!: string;
  isLoading: boolean = false;
  displayedColumns: string[] = ['author', 'url', 'message'];
  dataSource: any;

  constructor(private activatedRoute: ActivatedRoute, private s: SearchService) { }

  ngOnInit(): void {
    this.author = this.activatedRoute.snapshot.params['author'];
    this.repoName = this.activatedRoute.snapshot.params['repository'];
    this.s.goToRepo(this.author, this.repoName).subscribe( item => this.repository = item)
  }

  searchForCommits(){
    this.isLoading = true;
    this.s.searchCommits(this.author, this.repoName).subscribe((item : any) => {
      item.forEach((items : any) => this.commits.push(items.commit) )
      this.dataSource = new MatTableDataSource(this.commits)
      console.log(this.commits)
      this.isLoading = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
