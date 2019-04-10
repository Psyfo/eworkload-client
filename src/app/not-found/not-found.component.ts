import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
      private alertService: AlertService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

}
