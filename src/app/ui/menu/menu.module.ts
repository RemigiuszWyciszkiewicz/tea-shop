import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbContextMenuModule, NbMenuModule, NbUserModule } from '@nebular/theme';
import { FormsModule } from '../forms/forms.module';
import { UserMenuComponent } from '../header/user-menu/user-menu.component';
import { CompactSideMenuComponent } from './compact-side-menu/compact-side-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


const PROVIDERS = [...NbMenuModule.forRoot().providers];
const COMPONENTS = [SideMenuComponent, CompactSideMenuComponent,UserMenuComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, NbMenuModule, RouterModule, FormsModule,NbContextMenuModule, NbUserModule],
  exports: [...COMPONENTS],
})
export class MenuModule {
  static providers = [PROVIDERS];
}
