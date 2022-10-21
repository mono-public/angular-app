import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'element-a-route',
  templateUrl: './route-a.component.html',
})
export class RouterAComponent {
  constructor(private router: Router) {}

  public navigateToHome() {
    this.router.navigate([{ outlets: { elementA: null } }]);
  }
}
