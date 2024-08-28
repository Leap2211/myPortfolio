import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  onContact(){
    this.router.navigate(['contact']).then();
  }
}
