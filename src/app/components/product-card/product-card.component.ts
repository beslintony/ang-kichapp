import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

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

  @Input() productItem!: Product;

  @Output() btnClick = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  numberWithCommas = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  addToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.cartService.sendAddToCart(this.productItem);
    });
  }
}
