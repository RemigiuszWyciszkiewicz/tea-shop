import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent,children: [
    { path: 'czarna', component: DashboardComponent },
    { path: 'zielona', component: DashboardComponent },
    { path: 'biala', component: DashboardComponent },
    { path: 'japonska', component: DashboardComponent },
  ] },

  {
    path: ':id',
    loadChildren: () => import('@candy-shop/feature/product-details').then((m) => m.ProductDetailsModule)

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
