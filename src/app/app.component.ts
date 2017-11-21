import { Component } from '@angular/core';
import { ProductsService } from './services/products-service/products.service'
import { CartService } from './services/cart-service/cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService, CartService],  
})
export class AppComponent {  
  title = 'First Angular Web Shop';

  constructor() {}

  ngOnInit() {
  }  
}
