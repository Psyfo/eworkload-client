import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { Faculty } from '../../../../shared/models';
import { FacultyService } from '../../../../shared/services';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
    selector: 'app-faculty-add',
    templateUrl: './faculty-add.component.html',
    styleUrls: ['./faculty-add.component.scss'],
    animations: [routerTransition()]
})
export class FacultyAddComponent implements OnInit {
    faculty: Faculty = new Faculty();

    facultyAddForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private facultyService: FacultyService
    ) {}

    ngOnInit() {
        this.facultyAddForm = this.fb.group({
            facultyId: ['', Validators.required],
            name: ['', Validators.required]
        });
    }

    buildForm() {}

    getFormValue() {
        this.faculty.facultyId = this.facultyAddForm.get('facultyId').value;
        this.faculty.name = this.facultyAddForm.get('name').value;
    }

    onAdd() {
        if (this.facultyAddForm.invalid) {
            alert('Form not valid!');
            return;
        }
        this.getFormValue();
        this.facultyService.addFaculty(this.faculty).subscribe(result => {
            console.log(result);
            this.router.navigate(['../admin/faculty']);
        });
    }

    onBack() {
        this.router.navigate(['../admin/faculty']);
    }

    onReset() {
        this.facultyAddForm.reset();
    }
}
