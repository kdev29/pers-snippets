import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { ProductService } from "./product.service";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductListResolver implements Resolve<Product[]> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.service.getProducts();
    console.log('RESOLVER LIST');
  }

  constructor(private service: ProductService) { }

}

