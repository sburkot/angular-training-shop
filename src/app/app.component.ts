import { Component } from '@angular/core';
import { ProductsService } from './services/products-service/products.service'
import { CartService } from './services/cart-service/cart.service'

import { Product } from './model/product.model'
import { DataRepositoryService } from './services/data-repository/data-repository.service'
import { ProductComponent } from './components/product/product.component'
import { ProductListComponent} from './components/product-list/product-list.component'
import { CartComponent } from './components/cart/cart.component'
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

  ngOnInit() {}  
}
