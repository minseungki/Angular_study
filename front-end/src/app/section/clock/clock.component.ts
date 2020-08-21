import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import {interval} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {PageToggleService} from "../../share/page-toggle.service";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString: string

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {
    interval(1000)
      .pipe(map(() => {
      return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data
      })
  }

  goStopWatch() {
    this.pageToggleService.goPage('/stopwatch')
  }

  ngOnInit(): void {
  }

}
