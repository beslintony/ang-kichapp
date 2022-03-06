import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
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
    //TODO: Mapping the obtained result to our cart ,pipe and map
    return this.http.get<CartItem[]>(cartsUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];
        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].quantity++;
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartsUrl, { product });
  }
}
