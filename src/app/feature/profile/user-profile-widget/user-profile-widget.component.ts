import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@candy-shop/data-access/models';
import { UserQuery } from '@candy-shop/data-access/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'coin-market-user-profile-widget',
  templateUrl: './user-profile-widget.component.html',
  styleUrls: ['./user-profile-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileWidgetComponent implements OnInit {
  user$: Observable<Partial<User>>;

  constructor(
    private readonly _userQuery: UserQuery,


  ) {}

  ngOnInit(): void {
    this.user$ = this._userQuery.selectUser();
  }

}
