
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@app/services/product.service';
import { CanComponentDeactivate } from '../../../core/guards/loading.guard';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit, CanComponentDeactivate {
  pageId: number;
  productDetails: any;
  constructor(private activetedRoute: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.getPageId()
  }
  canDeactivate(): boolean {
    return true;
  }

  ngOnInit(): void {
    console.log(this.activetedRoute);
    this.activetedRoute.data.subscribe((data) => {
      this.productDetails = data;
    })
  }
  goToProductDetail(id) {
    this.router.navigate(['products', id])
  }
  getPageId() {
    this.activetedRoute.params.subscribe((param) => {
      //console.log(param);
      this.pageId = +param.id;
      //this.getProduct(this.pageId + '');
    });
  }
  /* getProduct(id: string) {
     this.productService.getProduct(id).subscribe((product) => {
       console.log(product);
       this.productDetails = product;
     })
   }*/
}
