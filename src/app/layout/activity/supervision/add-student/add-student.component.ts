import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { AlertService } from 'src/app/shared/modules';
import { Router } from '@angular/router';
import { SupervisionService } from '../supervision.service';
import { StudentService } from 'src/app/layout/admin/student/student.service';
import { QualificationService } from 'src/app/layout/admin/qualification/qualification.service';
import { Subject } from 'rxjs';
import { Qualification, Student } from 'src/app/shared/generated';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';

@Component({
    selector: 'app-add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.scss'],
    animations: [routerTransition()]
})
export class AddStudentComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f') form: any;

    student: any = {};
    qualifications: Qualification[] = [];
    selectedQualification: Qualification;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private supervisionService: SupervisionService,
        private studentService: StudentService,
        private qualificationService: QualificationService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'supervision' },
            { label: 'add-student' }
        ];
        this.getQualifications();
    }

    getQualifications() {
        this.qualificationService
            .qualificationsPostgraduate()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualifications;
            });
    }

    onSubmit() {}
    onBack(event) {
        this.router.navigate(['activity/supervision/add']);
    }
    onReset(event) {
        this.form.reset();
    }
}
