import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router,
    private _location: Location
  ) { }

  goPage(target) {
    this.router.navigateByUrl(target).then(r => console.log('move page ' + target))
  }

  historyBack() {
   this._location.back()
  }
}
