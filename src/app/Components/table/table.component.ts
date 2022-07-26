import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  constructor( private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    // 
  }

  displayedColumns: string[] = ['stargazers_count', 'name', 'created_at', 'avatar_url'];
  @Input() dataSource = new MatTableDataSource();
  @Input() isLoading = false;
  @Output() repoEvent = new EventEmitter();

  goToCommits(e: Event) {
    this.repoEvent.emit(e)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
