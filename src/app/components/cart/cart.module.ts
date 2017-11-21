import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListModule } from './../product-list/product-list.module'
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
//import { CartService } from './../../services/cart-service/cart.service';

@NgModule({
  imports: [
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
  ],
})
export class CartModule { }
