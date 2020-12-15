import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { HttpHelper } from 'app/@core/helpers/http.helper';
import { ThemeModule } from '../@theme/theme.module';
import { AuthRoutingModule } from './auth-routing.modules';
import { AuthComponent } from './auth.component';
@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ThemeModule, NbMenuModule, AuthRoutingModule],
  providers: [HttpHelper]
})
export class AuthModule {}
