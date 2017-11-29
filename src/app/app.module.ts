import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogModule } from './components/catalog/catalog.module'
import { CartModule } from './components/cart/cart.module'
import { ProductListModule } from './components/product-list/product-list.module';
import { LoginModule } from './components/login/login.module'

import { ProductsService } from './services/products-service/products.service'
import { CartService } from './services/cart-service/cart.service'
import { UserService, UserSrv } from './services/user-service/user.service';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CatalogModule,
    ProductListModule,
    CartModule    
  ],
  exports: [
  ],
  providers: [
    ProductsService,
    CartService,
    { provide: UserSrv, useClass: UserService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
