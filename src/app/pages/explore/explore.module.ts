import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { SharedModule } from 'app/@shared/shared.module';
@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, NbCardModule, SharedModule, NbSpinnerModule],
})
export class ExploreModule {}
