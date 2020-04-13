import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DashboardAreaRoutingModule} from './dashboard-area-routing.module';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,

    DashboardAreaRoutingModule,
  ],
})
export class DashboardAreaModule {
}
