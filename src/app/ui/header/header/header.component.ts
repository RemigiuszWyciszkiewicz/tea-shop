import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserQuery } from '@candy-shop/data-access/user';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'coin-market-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  get isAdmin(): boolean {
    return this.userQuery.getValue().user && this.userQuery.getValue().user.role === 'admin';
  }

  get isUser(): boolean {
    return this.userQuery.getValue().user && this.userQuery.getValue().user.role === 'user';
  }

  constructor(private readonly _router: Router, private readonly _sideMenuService: NbMenuService, private userQuery: UserQuery) {}
  @Output() menuExpand = new EventEmitter();

  redirectToDashboard(): void {
    this._sideMenuService.navigateHome();
  }

  openAdminPanel() {
    this._router.navigate(['pages', 'admin-panel']);
  }

  openCard() {
    this._router.navigate(['pages', 'cart']);
  }
}
