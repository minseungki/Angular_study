import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable(
  {providedIn: 'root'}
)
export class PageToggleService {

  routingCount: number = 0

  constructor(
    private router: Router
  ) { }

  goPage(target) {
    this.routingCount++
    this.router.navigateByUrl(target)
  }
}
