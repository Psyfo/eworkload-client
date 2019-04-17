import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { Student } from '../../../../shared/models';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    students = [
        {
            studentId: "21422869",
            firstName: "Sipho",
            lastName: "Mahlangu"
        },
        {
            studentId: "12345678",
            firstName: "John",
            lastName: "Doe"
        },
        {
            studentId: "21587452",
            firstName: "Bob",
            lastName: "Kane"
        },
        {
            studentId: "21687466",
            firstName: "Ndaba",
            lastName: "Tshuma"
        }
    ]

    supervisionAddForm: FormGroup;
    supervisionRoles = [
        {
            id: '1',
            name: 'Main Supervisor'
        },
        {
            id: '2',
            name: 'Co-Supervisor'
        }
    ];

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.supervisionAddForm = this.fb.group({
            supervisionRole: '',
            student: ''
        });
    }

    onRoleChange(e: Event) {
        // this.supervisionDetails.researchRole = this.researchActivityForm[
        //     'controls'
        // ].supervisionDetails['controls'].researchRole.value;
        // console.log(this.supervisionDetails.researchRole);
    }
}
