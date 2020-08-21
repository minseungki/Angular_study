import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SectionComponent} from "./section/section.component";
import {ClockComponent} from "./section/clock/clock.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stopwatch',
    pathMatch: 'full', // prefix or full root page는 full 권장
  },
  {
    path: 'stopwatch',
    component: SectionComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
