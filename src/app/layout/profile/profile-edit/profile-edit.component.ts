import { AlertService } from './../../../shared/services/alert.service';
import { OnInit, Component, SimpleChanges } from "@angular/core";
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { routerTransition } from "../../../router.animations";
import { first } from "rxjs/operators";
import {
    Lecturer,
    Department,
    Qualification,
    LecturerApi,
    DepartmentApi,
    QualificationApi,
    PositionApi,
    Position,
    LoopBackConfig
} from "../../../../../sdk";
import { environment } from "../../../../environments/environment";
import { Subject } from "rxjs";

@Component({
    selector: "app-profile-edit",
    templateUrl: "./profile-edit.component.html",
    styleUrls: ["./profile-edit.component.scss"]
})
export class ProfileEditComponent implements OnInit {
    // Properties
    lecturer: Lecturer;
    department: Department;
    departments: Department[];
    qualification: Qualification;
    qualifications: Qualification[];
    position: Position;
    positions: Position[];
    selectedQualification: Qualification = new Qualification();
    selectedDepartment: Department;
    selectedPositions: Position;

    profileEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private lecturerApi: LecturerApi,
        private departmentApi: DepartmentApi,
        private qualificationApi: QualificationApi,
        private positionApi: PositionApi
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }

    ngOnChanges() {}
    ngOnInit() {
        // Build form
        this.profileEditForm = this.fb.group({
            lecturerId: [{ value: "", disabled: true }, Validators.required],
            name: this.fb.group({
                firstName: ["", Validators.required],
                lastName: ["", Validators.required]
            }),
            email: ["", Validators.required],
            qualificationId: [""],
            departmentId: [""],
            positionId: [""]
        });

        this.initializeForm();
    }

    // Methods

    public initializeForm(): any {
        // Get current user and all their stats
        this.lecturerApi.getCurrent().subscribe(
            lecturerData => {
                // Get relevant data
                this.getQualifications();
                this.getDepartments();
                this.getPositions();
                this.lecturer = lecturerData;
                this.getCurrentQualification(this.lecturer.qualificationId);
                this.getCurrentPosition(this.lecturer.positionId);
                this.getCurrentDepartment(this.lecturer.departmentId);

                this.profileEditForm.patchValue(this.lecturer);
            },
            error => {
                console.log(error);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    // Form controls property
    public f() {
        return this.profileEditForm.controls;
    }

    public getCurrentQualification(qId: string) {
        this.qualificationApi
            .findById<Qualification>(qId)
            .subscribe(qualificationData => {
                this.qualification = qualificationData;
            });
    }

    public getCurrentDepartment(dId: string) {
        this.departmentApi
            .findById<Department>(dId)
            .subscribe(departmentData => {
                this.department = departmentData;
            });
    }

    public getCurrentPosition(pId: string) {
        this.positionApi.findById<Position>(pId).subscribe(positionData => {
            this.position = positionData;
        });
    }

    public getQualifications(): void {
        this.qualificationApi.find<Qualification>().subscribe(
            qualifications => {
                this.qualifications = qualifications;
            },
            error => {
                console.log(error);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    public getDepartments(): void {
        this.departmentApi.find<Department>().subscribe(
            departments => {
                this.departments = departments;
            },
            error => {
                console.log(error);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    public getPositions(): void {
        this.positionApi.find<Position>().subscribe(
            positions => {
                this.positions = positions;
            },
            error => {
                console.log(error.message);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    // Edit form
    public onEdit(): void {
        this.lecturerApi.getCurrent().subscribe(
            (currentLecturer) => {
                this.lecturer = currentLecturer;
                const editedLecturer: Lecturer = this.profileEditForm.value;
                console.log('Edited lecturer');
                console.log(`${editedLecturer}`);

                this.lecturerApi.patchAttributes(this.lecturer.lecturerId, editedLecturer).subscribe(
                    (response) => {
                        console.log(response);
                        console.log('Profile updated!');
                        this.alertService.sendMessage('Profile updated!', 'success');
                        this.router.navigate(['../profile']);
                    },
                    (error) => {
                        console.log(error);
                        this.alertService.sendMessage(error.message, 'danger');
                    }
                );
            },
            (error) => {
                console.log(error.message);
                this.alertService.sendMessage(error.message, 'danger');
            }
        );
    }

    // Back button
    public backToProfile(): void {
        this.router.navigate(["../profile"]);
    }

}
