import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
    selector: 'app-academic-administration-evidence',
    templateUrl: './academic-administration-evidence.component.html',
    styleUrls: ['./academic-administration-evidence.component.scss']
})
export class AcademicAdministrationEvidenceComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f') form: any;
    constructor() {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'formal-instruction' }
        ];
    }
}
