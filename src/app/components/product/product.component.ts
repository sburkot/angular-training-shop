import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Product } from './../../model/product.model'
import { CartService } from './../../services/cart-service/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
  }
  
  @Input() product: Product;
  @Input() cartService: CartService;
  @Input() detailedView: boolean;
  @Input() showBuyButton: boolean;
  @Input() showRemoveButton: boolean;

  onBuy(): void {    
    this.cartService.AddToCart(this.product);
  }

  onRemove(): void {    
    this.cartService.RemoveFromCart(this.product);
  }
}