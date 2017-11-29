import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, Inject } from '@angular/core';
import { UserService, UserSrv } from './../../services/user-service/user.service'
import { CartService } from './../../services/cart-service/cart.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  users: string[] = [];

  constructor(@Inject(UserSrv) private userService: UserService,
              private cartService : CartService ) { }
  
  ngOnInit() {
    this.initUsers();
  }

  initUsers(): void {
    this.userService.userList().forEach(user => {
      this.users.push(user.name);
    });
  }

  setCurrentUser(event): void {
    this.userService.setCurrentUser(event.target.value);
    this.cartService.ClearCart();
  }
}
