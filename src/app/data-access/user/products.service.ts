import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';
import { Product } from '../../feature/dashboard/models';
import { ApiService } from '../api/api-service';

@Injectable({ providedIn: 'root' })
export class ProductsService extends ApiService {
  constructor(injector: Injector) {
    super(injector, 'product');
  }

  getAllProducts(): Observable<Product[]> {
    return this.getAll('getAll');
  }

  deleteProduct(id: string): Observable<void> {
    return this.delete<any>(id, 'delete');
  }

  createProduct(product: Product): Observable<any> {
    return this.post(product, 'create');
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.put<Product>(id, product, 'update').pipe(switchMapTo(of(product)));
  }

  getProduct(id: string): Observable<Product> {
    return this.get(id, 'get');
  }
}

