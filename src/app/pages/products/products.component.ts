import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    console.log(this.productList)
  }
}
