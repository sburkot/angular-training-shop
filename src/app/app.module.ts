import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogModule } from './components/catalog/catalog.module'
import { CartModule } from './components/cart/cart.module'
import { ProductListModule } from './components/product-list/product-list.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    ProductListModule,
    CartModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
