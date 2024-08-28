import { Component } from '@angular/core';
import {routeTransition} from "./routing-animation";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeTransition
  ]
})
export class AppComponent {
  title = 'personal';
  constructor(protected route: ActivatedRoute) {
  }
}
