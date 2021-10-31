import { Product } from '../modeles/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [];
    Array(6).fill('').map((_, i) => this.products.push(new Product(i, `Product 00${i + 1}`)));
    console.log(this.products);
  }

  ngOnInit(): void {
  }

}
