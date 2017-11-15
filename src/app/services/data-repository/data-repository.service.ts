import { Injectable } from '@angular/core';
import { Product } from './../../model/product.model'
import {Category } from './../../model/product.model'

@Injectable()
export class DataRepositoryService {

  constructor() { }

  productList(): Array<Product> {
    return [
      new Product(1, 'iPhone', Category.Phone, 'iPhone 6s 32g', true, 600, ['Sony Experia z5', 'Samsung Galaxy S8']),
      new Product(2, 'Xperia', Category.Phone, 'Sony Experia z3', true, 300, ['Samsung Galaxy A3']),
      new Product(3, 'Galaxy', Category.Phone, 'Samsung Galaxy S8', true, 600, ['Sony Experia z5', 'iPhone 6s 32g']),
      new Product(4, 'iPad', Category.TabletPC, 'iPad Air 64g', true, 800),
      new Product(5, 'MacBook', Category.NoteBook, 'Apple A1466 MacBook Air 13', true, 1000)
    ];
  }
}
