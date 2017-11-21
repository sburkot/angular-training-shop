import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CartItem } from './../../../model/cart-item.model'
import { CartService } from './../../../services/cart-service/cart.service'

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartItemListComponent implements OnInit {

  @Input() items: Array<CartItem>;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

}
