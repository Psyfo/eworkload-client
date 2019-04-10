import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AlertService } from '../../../../shared/services';
import { Router } from '@angular/router';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    FormArray
} from '@angular/forms';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {

    outputTypes = ['Journal', 'Proceedings', 'Books', 'Chapter'];
    researchRoles = ['Author', 'Co-Author', 'Main Supervisor', 'Co-Supervisor'];
    supervisionDetails: {
        researchRole: string;
        studentId: string;
    } = { researchRole: '', studentId: '' };

    researchActivityForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        // initialize form
        this.researchActivityForm = this.fb.group({
            outputType: ['', Validators.required],
            researchLocation: ['', Validators.required],
            supervisionDetails: this.fb.group({
                researchRole: ['', Validators.required],
                studentId: ['']
            })
        });

        this.initializeForm();
    }

    initializeForm() {

    }

    onAdd() {
        if (this.researchActivityForm.invalid) {
            this.alertService.sendMessage('Validation failed!', 'warning');
        }

    }

    onBack() {
        this.router.navigate(['activity/research']);
    }

    onRoleChange(e: Event) {
        this.supervisionDetails.researchRole = this.researchActivityForm[
            'controls'
        ].supervisionDetails['controls'].researchRole.value;
        console.log(this.supervisionDetails.researchRole);
    }
}
