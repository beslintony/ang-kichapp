import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // TODO: Populate from an API

  products: Product[] = [
    new Product(
      1,
      'Choc Dress Premium',
      'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      120
    ),
    new Product(
      2,
      'Choc Pre ds',
      'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      120
    ),
    new Product(
      3,
      'Cdfs sgsg m',
      'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      15
    ),
    new Product(
      4,
      'Cfd f5 um',
      'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      116
    ),
    new Product(
      5,
      'Des fo d8',
      'This is the best product that is available in the history of mankind. buy it now and enjoy. Limited time offer. Buy Now. Now Itself!!!!!!',
      60
    ),
  ];

  constructor() {}

  getProducts():Product[]{
    // TODO: Populate products from an API and return as an Observable
    return this.products
  }
}
