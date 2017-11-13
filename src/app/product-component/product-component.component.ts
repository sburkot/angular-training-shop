import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponentComponent implements OnInit {  
  constructor() { }

  ngOnInit() {
  }

  public name: string;
  public price: number;
  public category: string;
  public description: string;
  public isAvailable: boolean;
}
