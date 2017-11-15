import { Injectable, Output } from '@angular/core';
import { Product } from './../../model/product.model'

@Injectable()
export class CartService {
  private products: Array<Product> = [];

  constructor() { }

  ngOnInit() {
    this.products = []; // Question
  }

  public IsEmpty(): boolean{
    return this.products == null ||
           this.products.length == 0;
  }

  public Purchases(): Array<Product>{
    return this.products;
  }

  public Log(){
    console.log('Cart Service Log() is called');
  }

  public AddToCart(product){
    this.products.push(product);
    console.log('Someone wants buy ' + product.name);
  }

  public RemoveFromCart(product){
    const pos = this.products.indexOf(product);
    this.products.splice(pos, 1);
    console.log('Someone doesn\'t want to buy ' + product.name);
  }
}
