import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

type cart = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: cart[] = [];

  cartTotal = 0;
  quantity = 1;

  constructor(private addToCartMsg: CartService) {}

  ngOnInit(): void {
    this.addToCartMsg.getCartItem().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    let productExists = false;

    for (let item in this.cartItems) {
      if (this.cartItems[item].id === product.id) {
        this.cartItems[item].quantity++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        quantity: this.quantity,
      });
    }

    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = 0;

    this.cartItems?.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
  }

  decreaseQuantity(product: Product) {
    for (let item in this.cartItems) {
      if (this.cartItems[item].quantity > 1) {
        this.cartItems[item].quantity--;
        break;
      }
    }
  }
}
