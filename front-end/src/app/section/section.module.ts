import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionComponent} from "./section.component";
import {StopwatchModule} from "./stopwatch/stopwatch.module";
import { ClockComponent } from './clock/clock.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent
  ],
  exports:[
    SectionComponent
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule
  ]
})
export class SectionModule { }
