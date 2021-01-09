import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserQuery } from '@candy-shop/data-access/user';
import { NbMenuItem, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'coin-market-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  get isAdmin(): boolean {
    return this.userQuery.getValue().user && this.userQuery.getValue().user.role === 'admin';
  }

  get isUser(): boolean {
    return this.userQuery.getValue().user && this.userQuery.getValue().user.role === 'user';
  }

  items: NbMenuItem[] = [
    {
      title: 'WSZYSTKIE',
      link: '/pages/dashboard',
      home: true,
      pathMatch: 'full',

    },
    {
      title: 'Czarna',
      link: '/pages/dashboard/czarna',
      pathMatch: 'full',

    },
    {
      title: 'Zielona',
      link: '/pages/dashboard/zielona',
      pathMatch: 'full',

    },

    {
      title: 'Biała',
      link: '/pages/dashboard/biala',
      pathMatch: 'full',

    },
    {
      title: 'Japońska',
      link: '/pages/dashboard/japonska',
      pathMatch: 'full',

    },
  ];

  constructor(private readonly _router: Router, private readonly _sideMenuService: NbMenuService, private userQuery: UserQuery) {}

  ngOnInit(): void {

    //this._sideMenuService.navigateHome()
  }

  openAdminPanel() {
    this._router.navigate(['pages', 'admin-panel']);
  }

  openCard() {
    this._router.navigate(['pages', 'cart']);
  }
}
