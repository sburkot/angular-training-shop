import { NgModule, Inject, InjectionToken, FactoryProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListModule } from './../product-list/product-list.module'
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { DiscountService, GetDiscountService, DscontSrv} from './../../services/discount-service/discount.service'
import { UserService, UserSrv } from './../../services/user-service/user.service'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProductListModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartItemListComponent
  ],
  exports: [
    CartComponent
  ],
  entryComponents: [
  ],
  providers: [
    { provide: DscontSrv, useFactory:  GetDiscountService, deps: [UserSrv] }
  ],
})
export class CartModule { }
