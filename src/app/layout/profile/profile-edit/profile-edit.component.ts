import { OnInit, Component, SimpleChanges } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { first } from 'rxjs/operators';
import { Lecturer, Department, Qualification, LecturerApi, DepartmentApi, QualificationApi, PositionApi, Position, LoopBackConfig } from '../../../../../sdk';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss'],
    animations: [routerTransition()]
})
export class ProfileEditComponent implements OnInit {
    lecturer: Lecturer = new Lecturer();
    departments: Department[];
    qualifications: Qualification[];
    positions: Position[];
    selectedQualification: Qualification;
    selectedDepartment: Department;
    selectedPositions: Position;


    profileForm: FormGroup;

    constructor(
        private flashMessagesService: FlashMessagesService,
        private router: Router,
        private formBuilder: FormBuilder,
        private lecturerApi: LecturerApi,
        private departmentApi: DepartmentApi,
        private qualificationApi: QualificationApi,
        private positionApi: PositionApi,
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }

    ngOnInit() {

        // Get qualifications
        this.qualificationApi.find<Qualification>()
            .subscribe(
                (qualifications) => {
                    this.qualifications = qualifications;
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                }
            );

        // Get departments
        this.departmentApi.find<Department>()
            .subscribe(
                (departments) => {
                    this.departments = departments;
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                }
            );

        // Get positions
        this.positionApi.find<Position>()
            .subscribe(
                (positions) => {
                    this.positions = positions;
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                }
            );

        this.profileForm = new FormGroup({
            'lecturerId': new FormControl(),
            'firstName': new FormControl(),
            'lastName': new FormControl(),
            'email': new FormControl(null, [Validators.email]),
            'photo': new FormControl(),
            'departmentId': new FormControl('Select a department'),
            'positionId': new FormControl('Select a position'),
            'qualificationId': new FormControl('Select a qualificaton')
        });

        this.onSelectQualificationChanges();
        this.onSelectDepartmentChanges();
        this.onSelectPositionChanges();

        // get active user
        this.lecturerApi.getCurrent()
            .subscribe(
                (lecturer) => {
                    this.lecturer = lecturer;
                    this.profileForm.patchValue({
                        lecturerId: lecturer.lecturerId,
                        firstName: lecturer.name.firstName,
                        lastName: lecturer.name.lastName,
                        email: lecturer.email,
                        photo: lecturer.photo
                    });
                },
                (error) => {
                    console.log(error);
                }
            );

    }

    onSelectQualificationChanges() {
        this.profileForm.get('qualificationId').valueChanges
            .subscribe(
                (val) => {
                    console.log(val);
                    return val;
                },
                (error) => {
                    console.log(error);

                }
            );
    }

    onSelectDepartmentChanges() {
        this.profileForm.get('departmentId').valueChanges
            .subscribe(
                (val) => {
                    console.log(val);
                    return val;
                },
                (error) => {
                    console.log(error);

                }
            );
    }

    onSelectPositionChanges() {
        this.profileForm.get('positionId').valueChanges
            .subscribe(
                (val) => {
                    console.log(val);
                    return val;
                },
                (error) => {
                    console.log(error);

                }
            );
    }

    onEdit() {
        this.lecturer.name.firstName = this.profileForm.get('firstName').value;
        this.lecturer.name.lastName = this.profileForm.get('lastName').value;
        this.lecturer.name.email = this.profileForm.get('email').value;
        this.lecturer.name.departmentId = this.profileForm.get('departmentId').value;
        this.lecturer.name.positionId = this.profileForm.get('positionId').value;
        this.lecturer.name.qualificationId = this.profileForm.get('qualificationId').value;

        console.log(this.lecturer);
        this.lecturerApi.patchAttributes(this.lecturer.lecturerId, this.lecturer)
            .subscribe(
                (res) => {
                    console.log(res);
                    alert('Edited Successfully!')
                    this.router.navigate(['/profile']);
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                }
            );


    }
}
