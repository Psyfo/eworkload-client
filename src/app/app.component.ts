import { Subject } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { AlertService } from './shared/modules';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Properties
  private unsubscribe = new Subject();

  constructor(private alertService: AlertService) {}

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
