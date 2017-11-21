import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CartService } from './../../services/cart-service/cart.service'
import { CartItem } from './../../model/cart-item.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  itemsInCart(): Array<CartItem> {
    return this.cartService.ItemsInCart();
  };
}
