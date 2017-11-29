import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CartItem } from './../../../model/cart-item.model'
import { CartService } from './../../../services/cart-service/cart.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;  
  
  constructor(public cartService : CartService) { }

  ngOnInit() {
  }

  onRemove(): void {    
    this.cartService.RemoveFromCart(this.item.product);
  }  

  onChange(): void {    
  //  this.cartService.AddToCart(this.item.product);
  //  console.log('onChange is called');
  }
}
