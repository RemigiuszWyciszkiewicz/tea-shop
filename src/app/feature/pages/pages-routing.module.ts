import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
   // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        loadChildren: () => import('@candy-shop/feature/profile').then((m) => m.ProfileModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('@candy-shop/feature/market').then((m) => m.MarketModule),
      },
      {
        path: 'admin-panel',
        loadChildren: () => import('@candy-shop/feature/transactions-history').then((m) => m.TransactionsHistoryModule),
      },

      {
        path: 'dashboard',
        loadChildren: () => import('@candy-shop/feature/dashboard').then((m) => m.DashboardModule),
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
