import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Properties
  private unsubscribe = new Subject();

  constructor() {}

  ngOnInit() {
    if (environment.production) {
      console.log('Running in production mode');
    } else {
      console.log('Running in development mode');
    }
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
