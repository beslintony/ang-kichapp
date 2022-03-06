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
  cartItems: cart[] = [
    // {
    //   id: 1,
    //   name: 'Choc Dress Premium',
    //   description:
    //     'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
    //   price: 120,
    //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
    //   quantity: 3,
    // },
    // {
    //   id: 2,
    //   name: 'Choc Pre ds',
    //   description:
    //     'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
    //   price: 120,
    //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
    //   quantity: 11,
    // },
    // {
    //   id: 3,
    //   name: 'Cdfs sgsg m',
    //   description:
    //     'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
    //   price: 15,
    //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
    //   quantity: 2,
    // },
    // {
    //   id: 4,
    //   name: 'Cfd f5 um',
    //   description:
    //     'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
    //   price: 116,
    //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
    //   quantity: 5,
    // },
    // {
    //   id: 5,
    //   name: 'Des fo d8',
    //   description:
    //     'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
    //   price: 60,
    //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
    //   quantity: 4,
    // },
  ];

  cartTotal = 0;
  quantity = 1;

  constructor(private addToCartMsg: CartService) {}

  ngOnInit(): void {
    this.addToCartMsg.getCartItem().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    this.cartItems.push({
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
      quantity: this.quantity,
    });

    this.cartTotal = 0;

    this.cartItems?.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
  }
}
