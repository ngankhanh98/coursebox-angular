import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { SharedModule } from '../@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.modules';
import { AuthComponent } from './auth.component';
@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, SharedModule, NbMenuModule, AuthRoutingModule],
})
export class AuthModule {}
