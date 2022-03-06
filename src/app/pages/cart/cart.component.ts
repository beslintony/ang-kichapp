import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  cartTotal = 0;
  quantity = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.cartService.getCartItem().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calculateCartTotal();
    });
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
