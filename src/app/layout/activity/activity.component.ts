import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    animations: [routerTransition()]
})
export class ActivityComponent implements OnInit {
    activityTypeForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.activityTypeForm = this.fb.group({
            activityType: ['']
        });
    }

    ngOnChanges(changes: SimpleChanges): void {}

    onSelectActivityType() {
        switch (this.activityTypeForm.value['activityType']) {
            case 1:
                this.router.navigate(['activity/lecturing']);
                break;
            case 2:
                this.router.navigate(['activity/research']);
                break;
            case 3:
                this.router.navigate(['activity/commInstruction']);
                break;
            case 4:
                this.router.navigate(['activity/publicService']);
                break;

            default:
                break;
        }
    }
}
