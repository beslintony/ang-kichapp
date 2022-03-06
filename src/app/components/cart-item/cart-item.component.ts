import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;

  @Input() cartItem!:any;

  constructor() {}

  ngOnInit(): void {}
}
