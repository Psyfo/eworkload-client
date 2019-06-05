import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { FacultyService } from '../../../../shared/services';
import { Faculty } from '../../../../shared/models';

@Component({
    selector: 'app-faculty-delete',
    templateUrl: './faculty-delete.component.html',
    styleUrls: ['./faculty-delete.component.scss'],
    animations: [routerTransition()]
})
export class FacultyDeleteComponent implements OnInit {
    facultyId: string;
    faculty: Faculty;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private facultyService: FacultyService
    ) {}

    ngOnInit() {
        this.facultyId = this.activatedRoute.snapshot.paramMap.get('id');
        this.getFaculty(this.facultyId);
    }

    getFaculty(facultyId) {
        this.facultyService.getFaculty(facultyId).subscribe(result => {
            this.faculty = result.data.faculty;
        });
    }

    onDelete() {}

    onBack() {
        this.router.navigate(['admin/faculty/view', this.facultyId]);
    }
}
