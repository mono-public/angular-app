import { ElementRoutingModule } from './element-routing-module';
import { NgModule } from '@angular/core';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterAComponent } from './route/route-a.component';
@NgModule({
  imports: [
    ElementRoutingModule.withRoutes([
      { path: '', component: FlightsSearchComponent, outlet: 'elementA' },
      { path: 'routeA', component: RouterAComponent, outlet: 'elementA' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
  exports: [ElementRoutingModule],
})
export class FlightsRoutingModule {}
