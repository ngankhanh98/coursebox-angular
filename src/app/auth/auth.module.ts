import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.modules";
@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ThemeModule, NbMenuModule, AuthRoutingModule],
})
export class AuthModule {}
