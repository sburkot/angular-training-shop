import { Component } from '@angular/core';
import { CartService } from './services/cart-service/cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {  
  title = 'First Angular Web Shop';

  constructor(private cartService : CartService) {}

  ngOnInit() {}
}
