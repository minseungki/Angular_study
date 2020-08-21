import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {PageToggleService} from "../../../share/page-toggle.service";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: string

  hour: number = 0
  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval

  constructor() {
    // setInterval(() => {
    //   this.test = new Date()
    // }, 1000)
  }

  timeStart() {
    this.timeStop()
    this.timeInterval = setInterval(() => {
      this.ms++
      if (this.ms === 100) {
        this.sec++
        this.ms = 0
      }

      if (this.sec === 60) {
        this.min++
        this.sec = 0
      }

      if (this.min === 60) {
        this.hour++
        this.min = 0
      }

    },10)
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop()
    this.hour = 0
    this.min = 0
    this.sec = 0
    this.ms = 0
  }

  // jquery on Change
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    for(let propName in changes) {
      if (propName === 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart()
            break
          case 'stop':
            this.timeStop()
            break
          case 'reset':
            this.timeReset()
            break
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
