import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Product } from './../../model/product.model'
import { CartService } from './../../services/cart-service/cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() products: Array<Product>;
  @Input() detailedView: boolean;
  @Input() showBuyButton: boolean;
}
