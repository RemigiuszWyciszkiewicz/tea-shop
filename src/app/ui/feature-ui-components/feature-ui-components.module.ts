import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '@candy-shop/ui/card';
import { PipesModule, UnixTimestampTimePipe } from '@candy-shop/utils/pipes';
import { CryptocurrencyNewsComponent } from './cryptocurrency-news/cryptocurrency-news.component';


const COMPONENTS = [CryptocurrencyNewsComponent];
@NgModule({
  declarations: [...COMPONENTS, UnixTimestampTimePipe],
  exports: [...COMPONENTS],
  imports: [CommonModule, CardModule, PipesModule],
  providers: [UnixTimestampTimePipe],
})
export class FeatureUiComponentsModule {}
