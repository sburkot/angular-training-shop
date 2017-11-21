import { Injectable, Output } from '@angular/core';
import { Product } from './../../model/product.model'
import { CartItem } from './../../model/cart-item.model'

@Injectable()
export class CartService {
  private products: Array<Product> = [];
  private items: Array<CartItem> = [];

  constructor() { }

  ngOnInit() {
    this.products = []; // Question
  }

  public IsEmpty(): boolean{
    return this.products == null ||
           this.products.length == 0;
  }

  public ItemsInCart(): Array<CartItem>{
    return this.items;
  }

  public TotalCost(): Number {
    var totalCost = 0;
    this.items.forEach(function(i) {
      totalCost += i.product.price * i.quantity;
    })
    return totalCost;
  }

  public Log(){
    console.log('Cart Service Log() is called');
  }

  public AddToCart(product){
    this.products.push(product);    
    console.log('Someone wants buy ' + product.name);


    var isAlreadyAdded = false;
    for(var index in this.items)
    {
      if(this.items[index].product.id == product.id)
      {
        this.items[index].quantity++;
        isAlreadyAdded = true;
        break;
      }
    }

    if(!isAlreadyAdded)
      this.items.push(new CartItem(product));
  }

  public RemoveFromCart(product){
    const pos = this.products.indexOf(product);
    this.products.splice(pos, 1);
    console.log('Someone doesn\'t want to buy ' + product.name);

    for(var index in this.items)
    {
      if(this.items[index].product.id == product.id)
      {
        if(this.items[index].quantity == 1)
          this.items.splice(Number(index), 1);
        else
          this.items[index].quantity--;          
        break;
      }
    }
  }
}
