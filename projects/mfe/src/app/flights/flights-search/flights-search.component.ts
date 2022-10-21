import {
  Component,
  ViewChild,
  ViewContainerRef,
  Inject,
  Input,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr,
    private router: Router
  ) {}

  search() {
    alert('Search not implemented');
  }

  navigateToRouteA() {
    this.router.navigate([{ outlets: { elementA: `routeA` } }]);
  }

  terms() {
    import('../lazy/lazy.component')
      .then((m) => m.LazyComponent)
      .then((comp) => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, null, this.injector);
      });
  }
}
