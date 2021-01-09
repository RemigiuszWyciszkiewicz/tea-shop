import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService, UserQuery, UserStore } from '@candy-shop/data-access/user';
import { NbMenuService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, ProductCategory } from '../models/product';
@Component({
  selector: 'coin-market-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  data: Product[];
  filteredProducts: Product[];
  constructor(
    private readonly _productsService: ProductsService,
    private readonly _sideMenuService: NbMenuService,
    private readonly _userQuery: UserQuery,
    private readonly _userStore: UserStore,
    private readonly _render: Renderer2,
    private readonly _router: Router
  ) {}

  test: Subscription;

  ngOnDestroy(): void {
    this.test.unsubscribe();
  }

  ngOnInit(): void {
    this._router.navigate(['pages', 'dashboard'])
    this._productsService.getAllProducts().subscribe((data) => {
      this.data = data;
      this.filteredProducts = data;
      this.filter();
    });


  }

  filter(): void {
    this.test = this._sideMenuService
      .onItemSelect()
      .pipe(map((item) => item.item.title))
      .subscribe((category) => {
        console.log(category)
        if (category === 'WSZYSTKIE') {
          this.filteredProducts = this.data;
        }
        if (category === ProductCategory.ZIELONA) {
          this.filteredProducts = this.data.filter((product) => product.category === ProductCategory.ZIELONA);
        }
        if (category === ProductCategory.CZARNA) {
          this.filteredProducts = this.data.filter((product) => product.category === ProductCategory.CZARNA);
        }
        if (category === ProductCategory.BIAŁA) {
          this.filteredProducts = this.data.filter((product) => product.category === ProductCategory.BIAŁA);
        }
        if (category === ProductCategory.JAPOŃSKA) {
          this.filteredProducts = this.data.filter((product) => product.category === ProductCategory.JAPOŃSKA);
        }
      });
  }

  productPreview(product: Product): void {
    this._router.navigate(['pages', 'dashboard', product._id]);
  }
}
