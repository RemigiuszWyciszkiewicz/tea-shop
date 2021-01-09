import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserQuery, UserService } from '@candy-shop/data-access/user';
import { Product } from '@candy-shop/feature/dashboard/models';
import { ToastrService } from '@candy-shop/ui/toastr';

@Component({
  selector: 'coin-market-product-details-current-data',
  templateUrl: './product-details-current-data.component.html',
  styleUrls: ['./product-details-current-data.component.scss'],
})
export class ProductDetailsCurrentDataComponent implements OnInit {
  get id(): string {
    return this._activatedRoute.snapshot.params.id;
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private rotuer: Router,
    private userService: UserService,
    private userQuery: UserQuery
  ) {}

  formGroup: FormGroup;

  @Input() product: Product;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({ amount: null });
  }

  buy(): void {
    this.userService
      .createCartPurchase(String(this.userQuery.getValue().user._id), {
        amount: this.formGroup.value.amount,
        productId: this.id,
      })
      .subscribe(() => {});

    setTimeout(() => {
      this.rotuer.navigate(['pages', 'cart']);
      this.toastrService.success('Dodano do koszyka');
    }, 1500);
  }
}
