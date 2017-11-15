import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CartService } from './../../services/cart-service/cart.service'
import { Product } from './../../model/product.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Input() cartService: CartService;
  @Input() purchases: Array<Product> [];
}
