import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserQuery, UserService } from '@candy-shop/data-access/user';
import { Product } from '@candy-shop/feature/dashboard/models';
import { ToastrService } from '@candy-shop/ui/toastr';

@Component({
  selector: 'coin-market-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  currentPage = 1;

  totalOrderValue: number = 0;

  constructor(
    private readonly _router: Router,
    private readonly _userQuery: UserQuery,
    private readonly _toastrService: ToastrService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly userService: UserService,
    private changeDetector: ChangeDetectorRef
  ) {}

  products: Product[];

  ngOnInit(): void {
    this.userService.getAllPurchases(String(this._userQuery.getValue().user._id)).subscribe((value) => {
      this.products = value;
      this.totalOrderValue = value.reduce((prev, curr) => {
        return prev + curr.amount * curr.price;
      }, 0);
      this.changeDetector.detectChanges();
    });
  }

  paginationChange(event: number): void {
    this.currentPage = event;
  }

  removeOrder(product: Product) {


    this.products = this.products.filter((item) => item._id !== product._id);
    this.totalOrderValue = this.products.reduce((prev, curr) => {
      return prev + curr.amount * curr.price;
    }, 0);

    this.userService.deleteCartPurchase(String(this._userQuery.getValue().user._id), {
      amount: product.amount,
      productId: product._id,
    }).subscribe();
  }
}
