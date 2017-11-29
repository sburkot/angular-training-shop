import { Injectable, Output } from '@angular/core';
import { Product } from './../../model/product.model'
import { CartItem } from './../../model/cart-item.model'

@Injectable()
export class CartService {
  private items: Array<CartItem> = [];
  public discount: number = -1;
  public discountAttempts: number = 3;
    
  constructor() { }

  ngOnInit() {
    this.items = []; // Question
  }

  public IsEmpty(): boolean{
    return this.items == null ||
           this.items.length == 0;
  }

  public ItemsInCart(): Array<CartItem>{
    return this.items;
  }

  public TotalQty(): number {
    var totalQty = 0;
    this.items.forEach(function(i) {
      totalQty += i.quantity;
    })
    return totalQty;
  }

  public TotalCost(): number {
    var totalCost = 0;
    this.items.forEach(function(i) {
      totalCost += i.product.price * i.quantity;
    })
    return totalCost;
  }

  public TotalCostWithDiscount(): number{
    var totalCost = this.TotalCost();
    return totalCost - (totalCost * this.discount / 100);
  }

  public Log(){
    console.log('Cart Service Log() is called');
  }

  public AddToCart(product){
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

    console.log('Someone wants buy ' + product.name);
  }

  public RemoveFromCart(product){    
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
    console.log('Someone doesn\'t want to buy ' + product.name);
  }

  public ClearCart() {
    this.items = [];
    this.discount = -1;
    this.discountAttempts = 3;
  }
}
