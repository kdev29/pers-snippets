import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Route } from '@angular/router';
import { ProductResolver } from './services/product-resolver.service';
import { ProductListResolver } from './product-list-resolver';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { GuardGuard as AuthGuard} from '../user/auth.guard';
import { ProductsGuard } from './products.guard';

const ROUTES: Route[] = [
      {
        path: '',
        component: ProductListComponent,
        resolve: {
          products: ProductListResolver
        }
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: {
          product: ProductResolver
        }
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        canDeactivate: [ProductsGuard],
        resolve: { product: ProductResolver},
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ]
      }
];
// const ROUTES: Route[] = [
//   {
//     path: 'products',
//     // canActivate: [AuthGuard],
//     resolve: {
//       products: ProductListResolver
//     },
//     children: [
//       {
//         path: '',
//         component: ProductListComponent
//       },
//       {
//         path: ':id',
//         component: ProductDetailComponent,
//         resolve: {
//           product: ProductResolver
//         }
//       },
//       {
//         path: ':id/edit',
//         component: ProductEditComponent,
//         canDeactivate: [ProductsGuard],
//         resolve: { product: ProductResolver},
//         children: [
//           {
//             path: '',
//             redirectTo: 'info',
//             pathMatch: 'full'
//           },
//           {
//             path: 'info',
//             component: ProductEditInfoComponent
//           },
//           {
//             path: 'tags',
//             component: ProductEditTagsComponent
//           }
//         ]
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ]
})
export class ProductModule { }
