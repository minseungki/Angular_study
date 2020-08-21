import {Component, OnInit} from '@angular/core';
import {PageToggleService} from "../share/page-toggle.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  providers: [PageToggleService]
})
export class SectionComponent implements OnInit {

  present

  startTime($event) {
    this.present = $event
  }

  constructor() { }

  ngOnInit(): void {
  }


}
