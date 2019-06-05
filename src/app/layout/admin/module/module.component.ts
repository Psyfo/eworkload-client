import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../../shared/services/error.service';
import { ModuleGQL, ModulesGQL, ModulesByDisciplineGQL } from '../../../shared/generated/output';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../shared/services';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

}
