import { Injectable } from '@angular/core';
import { Product } from './../../model/product.model';
import { Category } from './../../model/product.model';

@Injectable()
export class ProductsService {

  constructor() { }

  productList(): Array<Product> {
    return [
      new Product(1, 'iPhone', Category.Phone, 'iPhone 6s 32g', true, 600, ['Sony Experia z5', 'Samsung Galaxy S8']),
      new Product(2, 'Xperia', Category.Phone, 'Sony Experia z3', true, 300, ['Samsung Galaxy A3']),
      new Product(3, 'Galaxy', Category.Phone, 'Samsung Galaxy S8', true, 600, ['Sony Experia z5', 'iPhone 6s 32g']),
      new Product(4, 'ZenPad', Category.TabletPC, 'Asus ZenPad 8.0 16GB', false, 170),
      new Product(5, 'Lenovo Tab', Category.TabletPC, 'Lenovo Tab 3-850 8" WiFi 16GB', true, 150),
      new Product(6, 'iPad', Category.TabletPC, 'Apple iPad Air 64g', true, 800, ['Galaxy Tab S3']),
      new Product(7, 'Galaxy Tab', Category.TabletPC, 'Samsung Galaxy Tab S3 9.7" 32GB LTE', true, 750, ['Apple iPad Air 64g']),
      new Product(8, 'MacBook', Category.NoteBook, 'Apple A1466 MacBook Air 13', true, 1000)
    ];
  }
}
