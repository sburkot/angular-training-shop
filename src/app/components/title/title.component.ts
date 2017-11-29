import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements OnInit {
  @Input() appName : string;

  constructor() { }

  ngOnInit() {
  }

}
