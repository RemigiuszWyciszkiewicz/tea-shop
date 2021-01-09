import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@candy-shop/ui/forms';
import { ModalModule } from '@candy-shop/ui/modal';
import { NbCardModule } from '@nebular/theme';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserProfileWidgetComponent } from './user-profile-widget/user-profile-widget.component';


@NgModule({
  declarations: [ProfileComponent, UserProfileWidgetComponent],
  imports: [CommonModule, ProfileRoutingModule, NbCardModule, FormsModule, ModalModule],
})
export class ProfileModule {}
