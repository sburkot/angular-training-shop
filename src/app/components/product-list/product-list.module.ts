import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './../product/product.module'
import { ProductListComponent } from './product-list.component'


@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  declarations: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ],
})
export class ProductListModule { }
