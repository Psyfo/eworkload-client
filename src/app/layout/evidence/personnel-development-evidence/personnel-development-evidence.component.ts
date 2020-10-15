import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-personnel-development-evidence',
  templateUrl: './personnel-development-evidence.component.html',
  styleUrls: ['./personnel-development-evidence.component.scss']
})
export class PersonnelDevelopmentEvidenceComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f') form: any;
  constructor() {}

  ngOnInit() {
    this.breadcrumbs = [{ label: 'activity' }, { label: 'formal-instruction' }];
  }
}
