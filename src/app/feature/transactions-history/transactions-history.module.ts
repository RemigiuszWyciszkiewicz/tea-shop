import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '@candy-shop/ui/card';
import { FormsModule } from '@candy-shop/ui/forms';
import { LoaderModule } from '@candy-shop/ui/loader';
import { NbDialogModule } from '@nebular/theme';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransactionsHistoryRoutingModule } from './transactions-history-routing.module';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';

@NgModule({
  declarations: [TransactionsHistoryComponent],
  imports: [
    CommonModule,
    TransactionsHistoryRoutingModule,
    LoaderModule,
    CardModule,
    NgxPaginationModule,
    FormsModule,
    NbDialogModule.forRoot(),
  ],
})
export class TransactionsHistoryModule {}
