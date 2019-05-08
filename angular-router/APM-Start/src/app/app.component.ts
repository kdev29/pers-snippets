import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Route, Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  get isMessageDisplayed()  {
    // console.log('getter()', this.msgService.isDisplayed);
    return this.msgService.isDisplayed;
  }

  constructor(private authService: AuthService,
    private msgService: MessageService,
    private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        this.loading = false;
      }
    });
   }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
    // console.log('Log out');
  }

  displayMessages() {
    const navigationProps = [{ outlets: { popup: ['messages'] } }];
    this.router.navigate(navigationProps);
    this.msgService.isDisplayed = true;
    // console.log('this.msgService.isDisplayed', this.msgService.isDisplayed);
  }

  hideMessages(): void {
    this.msgService.isDisplayed = false;
    // console.log('this.msgService.isDisplayed', this.msgService.isDisplayed);
    this.router.navigate([{outlets: { popup: null }}]);
  }
}


