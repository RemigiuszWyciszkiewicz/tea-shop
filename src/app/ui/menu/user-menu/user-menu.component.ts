import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserQuery } from '@candy-shop/data-access/user';
import { NbMenuItem } from '@nebular/theme';
import { UserMenuOption } from './user-menu-options';

@Component({
  selector: 'coin-market-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements OnInit {
  constructor(private readonly _userQuery: UserQuery) {}

  username: string = this._userQuery.getValue().user ? this._userQuery.getValue().user.name : 'Niezalogowany';
  items: NbMenuItem[] = [];

  ngOnInit(): void {
    if (this._userQuery.getValue().user) {
      this.items = [
        { title: UserMenuOption.PROFILE, link: './pages/profile' },
        { title: UserMenuOption.LOGOUT, link: './hello' },
      ];
    } else {
      this.items = [
        { title: UserMenuOption.LOGIN, link: './hello' },
      ];
    }
  }
}
