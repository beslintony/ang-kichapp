import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems = [
    {
      id: 1,
      name: 'Choc Dress Premium',
      description:
        'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      price: 120,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
      quantity: 3,
    },
    {
      id: 2,
      name: 'Choc Pre ds',
      description:
        'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      price: 120,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
      quantity: 11,
    },
    {
      id: 3,
      name: 'Cdfs sgsg m',
      description:
        'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      price: 15,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
      quantity: 2,
    },
    {
      id: 4,
      name: 'Cfd f5 um',
      description:
        'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      price: 116,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
      quantity: 5,
    },
    {
      id: 5,
      name: 'Des fo d8',
      description:
        'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      price: 60,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
      quantity: 4,
    },
  ];

  cartTotal = 0;

  constructor() {}
  ngOnInit(): void {
    this.cartItems?.forEach((item) => {
      this.cartTotal += item.quantity * item.price;
    });
  }
}
