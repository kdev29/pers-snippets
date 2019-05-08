import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Product, ProductResolved } from "../product";
import { Observable, of } from "rxjs";
import { ProductService } from "../product.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved>{

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {

    const id = route.paramMap.get('id');
    console.warn('in resolver for ' + id);


    if (isNaN(+id)) {
      return of({ product: null, error: `Product with id ${id} wsnt found`});
    }


    return this.productService.getProduct(+id).pipe(
      map(product => ({product: product})),
      catchError(error => {
        console.error(error);
        return of({ product: null, error: error});
      })
    );
  }

}
