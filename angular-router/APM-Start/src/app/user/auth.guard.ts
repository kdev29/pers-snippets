import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot, //current abut to be activated route
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.checkLoggedIn(state.url);
  }

  constructor(private auth: AuthService, private router: Router) {

  }

  checkLoggedIn(redirectURL: string) {
    if (this.auth.isLoggedIn) {
      return true;
    }

    this.auth.redirectUrl = redirectURL;
    this.router.navigate(['/login']);

    return false;
  }
}
