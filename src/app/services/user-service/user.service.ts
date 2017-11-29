import { Injectable, InjectionToken } from '@angular/core';
import { User, UserRate } from './../../model/user.model'

@Injectable()
export class UserService {
  private users: Array<User>;
  private currentUser : User;

  constructor() {
    this.users = [
      new User(1, 'Ananymous User', 'user1', '111'),
      new User(2, 'Registered Low Rate User', 'user2', '222', UserRate.Low),
      new User(3, 'Registered Mid Rate User', 'user3', '333', UserRate.Mid),
      new User(4, 'Registered High Rate User', 'user4', '444', UserRate.High)
    ];
    this.currentUser = this.users[0];
  }

  userList(): Array<User> {
    return this.users;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(name: string) {
    for(var index in this.users)
    {
      if(this.users[index].name == name)
      {        
        this.currentUser = this.users[index];
        console.log('current user is ' + this.currentUser.name);
        break;
      }
    }
  }

  getCurrentUserRate(): UserRate {
    return this.currentUser.rate;
  }
}

export const UserSrv = new InjectionToken('userSrv');