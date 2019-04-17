import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../../shared/services';
import { routerTransition } from '../../../../router.animations';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User, Module } from '../../../../shared/models';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    moduleSelected: boolean = false;
    user: User;
    userId: string;
    loading: boolean;
    errors: any;
    modules: Module[];

    lectureStackForm: FormGroup;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.lectureStackForm = this.fb.group({
            coordinator: ['']
        });
    }

    getQualifications() {

    }

    onQualificationChanged(e: Event) {
        // this.moduleApi
        //     .find({
        //         where: { qualificationId: this.qualification.qualificationId }
        //     })
        //     .subscribe(
        //         moduleData => {
        //             this.modules = moduleData as Module[];
        //         },
        //         error => {
        //             console.log(`Status Code ${error.status}`);
        //             console.log(`Message: ${error.message}`);
        //             this.alertService.sendMessage(
        //                 `Status: ${error.status}`,
        //                 'danger'
        //             );
        //             this.alertService.sendMessage(error.message, 'danger');
        //         }
        //     );
    }

    onModuleChanged(e: Event) {
        this.moduleSelected = true;
    }

    onAdd() {}

    onBack() {
        this.router.navigate(['activity/lecturing']);
    }
}
