import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, NbCardModule, ThemeModule, NbSpinnerModule],
})
export class ExploreModule {}
