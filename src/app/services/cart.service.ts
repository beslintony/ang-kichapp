import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { cartsUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  subject = new Subject<Product>();

  constructor(private http: HttpClient) {}

  sendAddToCart(product: Product) {
    this.subject.next(product);
  }

  getCartItem(): Observable<Product> {
    return this.subject.asObservable();
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartsUrl);
  }
}
