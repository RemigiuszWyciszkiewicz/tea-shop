import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService, UserQuery } from '@candy-shop/data-access/user';
import { Product } from '@candy-shop/feature/dashboard/models';
import { CoinTransactionModalComponent } from '@candy-shop/ui/modal';
import { NbDialogService } from '@nebular/theme';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'coin-market-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.scss'],
})
export class TransactionsHistoryComponent implements OnInit {
  loading = false;
  currentPage = 1;
  transactionError: HttpErrorResponse;

  products: Product[];

  constructor(
    private productsService: ProductsService,
    private _dialogService: NbDialogService,
    private readonly _userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((value) => {
      this.products = value;
    });
  }

  edit(id) {
    const product = this.products.find((item) => item._id === id);

    this._dialogService
      .open(CoinTransactionModalComponent, { context: { product: product, transactionType: 'EDYCJA PRODUKTU' } })
      .onClose.pipe(
        filter(Boolean),
        switchMap((product22: Product) => {
          return this.productsService.updateProduct(id, product22);
        })
      )
      .subscribe((updatedProduct) => {
        console.log(updatedProduct);
        this.products = this.products.map((item) => {
          if (item._id === id) {
            return { _id: id, ...updatedProduct };
          } else {
            return item;
          }
        });
      });
  }

  delete(id) {
    this.productsService.deleteProduct(id).subscribe(console.log);
    this.products = this.products.filter((item) => item._id !== id);
  }

  add() {
    this._dialogService
      .open(CoinTransactionModalComponent, { context: { transactionType: 'DODAJ NOWY PRODUKT' } })
      .onClose.pipe(
        filter(Boolean),
        switchMap((product: Product) => {
          return this.productsService.createProduct(product);
        })
      )
      .subscribe((item: Product) => {
        this.products.push(item);
      });
  }

  paginationChange(event: number): void {
    this.currentPage = event;
  }
}
