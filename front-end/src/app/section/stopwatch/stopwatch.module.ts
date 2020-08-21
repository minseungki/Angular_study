import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonsComponent} from "./buttons/buttons.component";
import {TimeDisplayComponent} from "./time-display/time-display.component";
import {PageToggleService} from "../../share/page-toggle.service";



@NgModule({
  declarations: [
    ButtonsComponent,
    TimeDisplayComponent
  ],
  exports: [
    ButtonsComponent,
    TimeDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  // 서비스 등록
  providers: [
    PageToggleService
  ]
})
export class StopwatchModule { }
