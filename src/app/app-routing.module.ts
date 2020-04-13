import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {dashboardAreaRoutes} from './areas/dashboard/dashboard-area.routes';


const routes: Routes = [
  ...dashboardAreaRoutes.lazyRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
