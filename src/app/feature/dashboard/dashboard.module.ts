import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '@candy-shop/ui/card';
import { ChartsModule } from '@candy-shop/ui/charts';
import { LabelModule } from '@candy-shop/ui/label';
import { LoaderModule } from '@candy-shop/ui/loader';
import { ThemeDirectivesModule } from '@candy-shop/utils/directives';
import { PipesModule, UnixTimestampTimePipe } from '@candy-shop/utils/pipes';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


const COMPONENTS = [
  DashboardComponent,

];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    LoaderModule,
    CardModule,
    LabelModule,
    ThemeDirectivesModule,
    PipesModule
  ],
  providers: [UnixTimestampTimePipe]
})
export class DashboardModule {}
