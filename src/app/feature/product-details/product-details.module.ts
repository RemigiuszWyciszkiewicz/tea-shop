import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from '@candy-shop/ui/card';
import { ChartsModule } from '@candy-shop/ui/charts';
import { FeatureUiComponentsModule } from '@candy-shop/ui/feature-ui-components';
import { FormsModule } from '@candy-shop/ui/forms';
import { ThemeDirectivesModule } from '@candy-shop/utils/directives';
import {
  ProductDetailsCurrentDataComponent
} from './product-details-current-data/product-details-current-data.component';
import { ProductDetailsComponent } from './product-details.component';


const COMPONENTS = [
  ProductDetailsComponent,
  ProductDetailsCurrentDataComponent,

];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    CardModule,

    FeatureUiComponentsModule,
    ChartsModule,
    FormsModule,

    RouterModule.forChild([{ path: '', component: ProductDetailsComponent }]),
    ThemeDirectivesModule,
    FormsModule,

  ],
})
export class ProductDetailsModule {}
