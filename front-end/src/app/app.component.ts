import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag name ( index.html에 있음 )
  templateUrl: './app.component.html',  // template html 파일
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
}
