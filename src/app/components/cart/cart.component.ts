import { Component, OnInit, ViewEncapsulation, Input, Inject } from '@angular/core';
import { CartService } from './../../services/cart-service/cart.service';
import { DiscountService, DscontSrv } from './../../services/discount-service/discount.service'
import { UserService, UserSrv } from './../../services/user-service/user.service'
import { CartItem } from './../../model/cart-item.model';
import { UserRate } from './../../model/user.model'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService,
              @Inject(UserSrv) private userService: UserService,
              @Inject(DscontSrv) private discountService: DiscountService) { }

  ngOnInit() { }

  itemsInCart(): Array<CartItem> {
    return this.cartService.ItemsInCart();
  };

  allowDiscount(): boolean {
    return this.userService.getCurrentUserRate() != UserRate.None 
        && this.cartService.discountAttempts > 0;
  }

  discount() : number {
    return this.cartService.discount;
  }

  onGetDiscount() {    
    this.cartService.discount = this.discountService.GetDiscount();
    this.cartService.discountAttempts--;
  }
}
