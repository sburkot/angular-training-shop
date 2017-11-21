import { Product } from './product.model'

export class CartItem {
    constructor(
      public product: Product,
      public quantity?: number
    ) {
      this.product = product;
      this.quantity = quantity || 1;
    }

    public Cost(): Number {
        return this.product.price * this.quantity;
    }
  }