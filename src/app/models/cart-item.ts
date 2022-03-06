import { Product } from './product';

export class CartItem {
  id!: number;
  productId!: number;
  name!: string;
  price!: number;
  img!: string;
  quantity!: number;

  constructor(id: number, product: Product, quantity: number = 1) {
    this.id = id;
    this.productId = product.id;
    this.name = product.name;
    this.price = product.price;
    this.img = product.img;
    this.quantity = quantity;
  }
}
