import { Injectable, Injector } from '@angular/core';
import { Product } from '@candy-shop/feature/dashboard/models';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api-service';
import { User } from '../models';

export interface Purchase {
  productId: string;
  amount: number;
}

@Injectable({ providedIn: 'root' })
export class UserService extends ApiService {
  constructor(injector: Injector) {
    super(injector, 'user');
  }

  checkUserTokenValidity(userId: ID): Observable<User> {
    return this.post<any>({}, 'tokenValidation/' + userId);
  }

  resetAccount(userId: ID): Observable<User> {
    return this.put<any>(userId, {}, 'accountReset');
  }

  createCartPurchase(userId: string, purchase: Purchase) {
    return this.post(purchase, 'purchase/' + userId);
  }

  deleteCartPurchase(userId: string, purchase: Purchase) {
    return this.put(userId, purchase, 'purchase');
  }

  getAllPurchases(userId: string): Observable<Product[]> {
    return this.getAll('getAllPurchase/' + userId);
  }
}
