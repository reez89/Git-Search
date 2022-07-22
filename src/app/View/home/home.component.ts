import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  constructor( private changeDetector: ChangeDetectorRef) {

    console.log('parent') 
  }

  ngOnInit(): void {
  }

}
