import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://api.mycart.com'
  : 'http://localhost:3000';

export const productsUrl = baseUrl + '/products';
export const cartsUrl = baseUrl + '/carts';
