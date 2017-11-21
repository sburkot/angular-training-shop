import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './../product/product.module'
import { ProductListModule } from './../product-list/product-list.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    ProductListModule
  ],
  declarations: [
    CatalogComponent
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
