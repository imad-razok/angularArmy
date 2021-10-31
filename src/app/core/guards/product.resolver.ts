import { EMPTY, Observable, of } from 'rxjs';
import { ProductService } from './../services/product.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<any>{
  constructor(private productService: ProductService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const pageId = route.paramMap.get('id')
    return pageId ? this.productService.getProduct(pageId).pipe(
      catchError(() => {
        return of('no data');
      })
    ) : EMPTY;
  }

}
