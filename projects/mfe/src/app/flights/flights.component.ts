import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface MonoWidgetProps {
	id: string;
	token: IdAndAccessToken;
	env: Record<string, string>;
	setCleanUp: (cleanUp: () => Promise<void>) => void;
	setSave: (save: () => Promise<void>) => void;	
	params?: Record<string, string>;	
}

export type IdAndAccessToken = {
	idToken: string;
	accessToken: string;
};

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html',
})
export class FlightsComponent implements OnInit, OnChanges {
  @Input() monoProps: MonoWidgetProps;

  constructor(private router: Router) {
    console.log(`Flight component constructor`);
  }

  ngOnInit() {
    this.router.initialNavigation();
    // Manually triggering initial navigation for @angular/elements
  }

  ngOnChanges() {
    this.monoProps.setCleanUp(() => {
      alert(`widget ${this.monoProps.id} is closing`);
      return Promise.resolve();
    });
  }
}
