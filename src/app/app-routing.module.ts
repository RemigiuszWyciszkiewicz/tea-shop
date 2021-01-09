import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '@candy-shop/ui/error-components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('@candy-shop/feature/pages').then((m) => m.PagesModule),
  },

  {
    path: 'hello',
    loadChildren: () => import('@candy-shop/feature/start-page').then((m) => m.StartPageModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found-page' },
  { path: 'not-found-page', component: NotFoundPageComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
})
export class AppRoutingModule {}
