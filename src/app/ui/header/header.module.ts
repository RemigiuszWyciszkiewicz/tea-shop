import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbContextMenuModule, NbIconModule, NbUserModule } from '@nebular/theme';
import { FormsModule } from '../forms';
import { HeaderComponent } from './header/header.component';



const COMPONENTS = [HeaderComponent];
@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, NbContextMenuModule, NbUserModule, NbIconModule,FormsModule],
})
export class HeaderModule {}
