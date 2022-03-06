import { Component, Input, OnInit } from '@angular/core';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() icon?: any = faShoppingCart;
  @Input() size? = 'sm';
  @Input() color? = 'orange';
  @Input() text? = 'Add To Cart';

  @Input() productName!:string;
  @Input() productPrice!: number;
  @Input() img!: string;

  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {
    console.log('clicked');
  }

  numberWithCommas = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
