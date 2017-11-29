import { Injectable, InjectionToken} from '@angular/core';
import { UserService } from './../../services/user-service/user.service'
import { UserRate } from './../../model/user.model'

@Injectable()
export class DiscountService {

  discounts: any = {
    1 : { min:1, max:10 },
    2 : { min:10, max:20 },
    3 : { min:20, max:50 }
  };
  prevDiscount: number = 0;

  constructor(private userService: UserService){
    this.userService = userService;
  }

  private CurrentUserRate(): UserRate {
    return this.userService.getCurrentUser().rate;
  }

  GetDiscount() : number {
    var userRate = this.CurrentUserRate();
    var discount = 0;    
    while (true)
    {
      if( discount >= this.discounts[userRate].min && 
          discount <= this.discounts[userRate].max &&
          discount != this.prevDiscount )
          break;
      discount = Math.floor(Math.random() * 100);
    }
    this.prevDiscount = discount;
    return discount;
  }
}

export const UsrRate = new InjectionToken('usrRate');
export const DscontSrv = new InjectionToken('dscontSrv');

export function GetDiscountService(userService: UserService) : DiscountService {
  return new DiscountService(userService);
}
