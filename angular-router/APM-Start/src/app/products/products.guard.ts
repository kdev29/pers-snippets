import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductEditComponent } from './product-edit/product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsGuard implements CanDeactivate<ProductEditComponent> {

  canDeactivate(component: ProductEditComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if (component.isDirty) {
      const productName = component.product.productName || 'New Product';
      return confirm('Navigate away and lose all changes?');
    }

    return true;
  }


}
