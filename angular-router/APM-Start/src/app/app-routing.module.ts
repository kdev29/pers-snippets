import { NgModule } from "@angular/core";
import { RouterModule, Route, PreloadingStrategy, PreloadAllModules } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { GuardGuard } from "./user/auth.guard";

const ROUTES: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: './products/product.module#ProductModule',
    canActivate: [GuardGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
