import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserMenuOption } from '@candy-shop/ui/header';
import { NbIconLibraries, NbMenuBag, NbMenuService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from './core/authorization';
import { UserStore } from './data-access/user';



declare let gtag: Function;
@Component({
  selector: 'coin-market',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(

    private readonly _iconLibraries: NbIconLibraries,
    private readonly _nbMenuService: NbMenuService,
    private readonly _authService: AuthService,
    private readonly _userStore: UserStore,
    private readonly _router: Router
  ) {
    this._iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa', packClass: 'fa' });
  }

  menuEventSubscription: Subscription;
  routerEventSubscription: Subscription;

  ngOnInit(): void {
    this.initializeGoogleAnalyticsTrackling();
    this.startListeningOnLogoutAction();
  }

  ngOnDestroy(): void {
    this.menuEventSubscription.unsubscribe();
    this.routerEventSubscription.unsubscribe();
  }

  startListeningOnLogoutAction(): void {
    this.menuEventSubscription = this._nbMenuService
      .onItemClick()
      .pipe(filter(this.filterUserMenuEvents))
      .subscribe(() => {
        this._authService.setUserAuthorizationStatus(false);
        this._userStore.reset();
      });
  }

  filterUserMenuEvents(value: NbMenuBag): boolean {
    return value.tag === 'userMenu' && value.item.title === UserMenuOption.LOGOUT;
  }



  initializeGoogleAnalyticsTrackling(): void {
    this.routerEventSubscription = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-174901242-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
