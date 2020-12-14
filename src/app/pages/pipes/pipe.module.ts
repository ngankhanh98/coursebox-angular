import { NgModule } from '@angular/core';
import { RouteCustomPipe, RouteCustomDashboardPipe } from './route-custom.pipe';

@NgModule({
  imports: [],
  exports: [RouteCustomPipe, RouteCustomDashboardPipe],
  declarations: [RouteCustomPipe, RouteCustomDashboardPipe],
  providers: [],
})
export class PipeModule {}
