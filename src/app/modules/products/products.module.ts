import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductSidebarComponent } from './product-sidebar/product-sidebar.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { ShardModuleModule } from '../../shard-module/shard-module.module';

@NgModule({
  declarations: [
    ProductSidebarComponent,
    ProductsDetailsComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ShardModuleModule
  ]
})
export class ProductsModule { }
