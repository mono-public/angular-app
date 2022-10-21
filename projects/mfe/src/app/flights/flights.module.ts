import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { RouterAComponent } from './route/route-a.component';
import { FlightsRoutingModule } from './fights-routing.module';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { FlightsComponent } from './flights.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [FlightsComponent, FlightsSearchComponent, RouterAComponent],
  imports: [BrowserModule, CommonModule, FlightsRoutingModule],
  entryComponents: [FlightsComponent],
})
export class FlightsModule {
  constructor(private injector: Injector) {
    const appElement = createCustomElement(FlightsComponent, {
      injector: injector,
    });

    customElements.define('flight-a', appElement);
  }
  ngDoBootstrap() {}
}

platformBrowserDynamic()
  .bootstrapModule(FlightsModule)
  .then(() => {
    console.log('Mounted Flight module');
  })
  .catch((err) => console.log(err));
