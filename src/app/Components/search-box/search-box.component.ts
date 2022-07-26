import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input()
  searchValue: string = "";
  @Input()
  starsValue?: number;
  @Input()
  language?: string;

  @Output() 
  searchForRepos: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  search(repo : string, stars? : number, language? : string): any{
    let searchValues = {
      repo : repo,
      stars : stars,
      language : language
    }
    this.searchForRepos.emit(searchValues)
  }

}
