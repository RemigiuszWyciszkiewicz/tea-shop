import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@candy-shop/data-access/user';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Product } from '../dashboard/models';

@Component({
  selector: 'coin-market-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  get id(): ID {
    return this._activatedRoute.snapshot.params.id;
  }

  product$: Observable<Product>;

  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.product$ = this.productsService.getProduct(String(this.id));
  }
}
