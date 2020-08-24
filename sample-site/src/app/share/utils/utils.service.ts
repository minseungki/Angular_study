import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isNull (str) {
    return str === '' || str === null || str === undefined || (str !== null && typeof str === 'object' && !Object.keys(str).length);
  }
}
