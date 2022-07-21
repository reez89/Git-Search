import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SingleRepoResponse } from 'src/app/Interfaces/single-repo-response.interface';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {

  repository!: SingleRepoResponse ;
  author!: string;
  repoName!: string;

  constructor(private activatedRoute: ActivatedRoute, private s: SearchService) { }

  ngOnInit(): void {
    this.author = this.activatedRoute.snapshot.params['author'];
    this.repoName = this.activatedRoute.snapshot.params['repository'];
    this.s.goToRepo(this.author, this.repoName).subscribe( item => this.repository = item)
  }

}
