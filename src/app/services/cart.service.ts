import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  subject = new Subject<Product>();

  constructor() {}

  sendAddToCart(product: Product) {
    this.subject.next(product);
  }

  getCartItem(): Observable<Product> {
    return this.subject.asObservable();
  }
}
