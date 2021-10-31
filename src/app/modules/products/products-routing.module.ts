import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ChildrenGuard } from '../../core/guards/children.guard';
import { LoadingGuard } from '../../core/guards/loading.guard';
import { ProductResolver } from '../../core/guards/product.resolver';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { ProductSidebarComponent } from './product-sidebar/product-sidebar.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'products-sidebar', component: ProductSidebarComponent, outlet: 'side' },
  { path: '', component: SidebarComponent, outlet: 'side' },
  {
    path: '',
    component: ProductsListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [ChildrenGuard],
    children: [
      { path: ':id', component: ProductsDetailsComponent, canDeactivate: [LoadingGuard], resolve: { myProduct: ProductResolver } },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
