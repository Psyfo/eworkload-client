import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Department, DepartmentInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DepartmentService } from '../department.service';

@Component({
    selector: 'app-department-view',
    templateUrl: './department-view.component.html',
    styleUrls: ['./department-view.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentViewComponent implements OnInit {
    department: Department;
    departmentInput: DepartmentInput;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer,
        private departmentService: DepartmentService,
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        // Get ID from route
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.getDepartment(result.departmentId);
            });
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods

    getDepartment(departmentId: string) {
        this.departmentService
            .department(departmentId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.department = <Department>(<unknown>result.data.department);
            });
    }

    onEdit() {
        this.router.navigate(
            ['admin/department/edit', this.department.departmentId],
            {
                queryParams: {
                    departmentId: this.department.departmentId
                }
            }
        );
    }

    onCancel() {
        this.router.navigate(['../admin/department']);
    }

    async onDelete() {
        this.departmentInput.departmentId = await this.department.departmentId;
        this.departmentInput.name = await this.department.name;
        this.departmentInput.facultyId = await this.department.faculty
            .facultyId;
        console.log('Dept input', this.departmentInput);

        this.departmentService
            .deleteDepartment(this.departmentInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log('Errors:', result.errors);
                console.log('Network Status:', result.networkStatus);
                this.alertService.success('Department deleted');
                setTimeout(() => {
                    this.modalService.dismissAll('Operations complete');
                    this.router.navigate(['admin/department']);
                }, 1000);
            });
    }

    closeResult: string;
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(
                result => {
                    this.closeResult = `Closed with: ${result}`;
                },
                reason => {
                    this.closeResult = `Dismissed ${this.getDismissReason(
                        reason
                    )}`;
                }
            );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
