import { Component, AfterViewInit, ViewEncapsulation, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Product } from './../../model/product.model'
import { CartService } from './../../services/cart-service/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements AfterViewInit {  

  @Input() product: Product;
  @Input() detailedView: boolean;
  @Input() showBuyButton: boolean;    
  @ViewChild('button') buyButton: ElementRef;

  constructor(public cartService : CartService) { }

  ngAfterViewInit() {
    (<HTMLButtonElement>this.buyButton.nativeElement).disabled = !this.product.isAvailable;
  }

  onBuy(): void {
      this.cartService.AddToCart(this.product);
  }

  onRemove(): void {
    this.cartService.RemoveFromCart(this.product);
  }
}