import { Component, Input, OnInit } from '@angular/core';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() icon: any = faShoppingCart;
  size = 'sm';
  color = 'orange';
  text = 'Add To Cart';

  @Input() productName?: string;
  @Input() productPrice?: number;
  @Input() oldPrice?: number;
  @Input() img?: string = '/assets/images/woman-in-cart.png';

  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {
    console.log('clicked');
  }

  numberWithCommas = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
