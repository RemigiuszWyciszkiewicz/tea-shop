import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '@candy-shop/ui/card';
import { ChartsModule } from '@candy-shop/ui/charts';
import { FormsModule } from '@candy-shop/ui/forms';
import { LabelModule } from '@candy-shop/ui/label';
import { LoaderModule } from '@candy-shop/ui/loader';
import { ModalModule } from '@candy-shop/ui/modal';
import { ThemeDirectivesModule } from '@candy-shop/utils/directives';
import { NgxPaginationModule } from 'ngx-pagination';
import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market/market.component';



@NgModule({
  declarations: [MarketComponent],
  imports: [
    CommonModule,
    MarketRoutingModule,
    LoaderModule,
    ModalModule,
    CardModule,
    ChartsModule,
    LabelModule,
    FormsModule,
    ThemeDirectivesModule,
    NgxPaginationModule
  ],
  providers: [],
})
export class MarketModule {}
