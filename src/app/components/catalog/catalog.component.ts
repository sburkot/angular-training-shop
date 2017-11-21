import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from './../../services/products-service/products.service'
import { CartService } from './../../services/cart-service/cart.service'
import { Product } from './../../model/product.model'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

  constructor(public productsService: ProductsService,
              public cartService: CartService) { }

  ngOnInit() {
  }

  products(): Array<Product> {
    return this.productsService.productList();
  };
}
