import { Component, OnInit, EventEmitter } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LecturerApi, DutyApi, ActivityApi, LectureStackApi, ResearchApi, CommInstructionApi, PublicServiceApi, EvidenceApi, LoopBackConfig, Activity, Duty, Lecturer, Research, Tariff, TariffApi } from '../../../../../sdk';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
    selector: 'app-activity-add',
    templateUrl: './activity-add.component.html',
    styleUrls: ['./activity-add.component.scss'],
    animations: [routerTransition()]
})
export class ActivityAddComponent implements OnInit {
    // properties
    activities: Activity[];
    research: Research;
    duties: Duty[];
    lecturer: Lecturer;
    researchTariffs: Tariff[];

    activityForm: FormGroup;

    formalInstructionCollapsed = true;
    communityInstructionCollapsed = true;
    researchCollapsed = true;
    publicServiceCollapsed = true;
    academicAdministrationCollapsed = true;
    personnelDevelopmentCollapsed = true;
    executiveManagementCollapsed = true

    selectedFile: File;
    progress: number;
    fileName: string;




    constructor(
        private http: HttpClient,
        private flashMessagesService: FlashMessagesService,
        private lecturerApi: LecturerApi,
        private dutyApi: DutyApi,
        private activityApi: ActivityApi,
        private lectureStackApi: LectureStackApi,
        private researchApi: ResearchApi,
        private commInstructionApi: CommInstructionApi,
        private publicServiceApi: PublicServiceApi,
        private evidenceApi: EvidenceApi,
        private tariffApi: TariffApi
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }

    ngOnInit() {


        this.activityForm = new FormGroup({
            'dutyId': new FormControl(),
            'estimatedHours': new FormControl(null, [Validators.required]),
            'formalInstruction': new FormGroup({

            }),
            'communityInstruction': new FormGroup({

            }),
            'research': new FormGroup({

            }),
            'publicService': new FormGroup({

            }),
            'academicAdministration': new FormGroup({

            }),
            'personnelDevelopment': new FormGroup({

            }),
            'executiveManagement': new FormGroup({

            })

        });

        this.getDuties();
        this.onSelectDutyChanges();
        this.getResearchTariffs();


    }

    getDuties() {
        // get duties
        this.dutyApi.find<Duty>()
            .subscribe(
                (dutyList) => {
                    this.duties = dutyList;
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error.message, { cssClass: 'alert-danger' });
                }
            );
    }

    getResearchTariffs() {
        return this.tariffApi.find({where: {dutyId: "20"}})
        .subscribe(
            (tariffList) => {
                this.researchTariffs = tariffList as Tariff[];
            },
            (error) => {
                console.log(error);
                this.flashMessagesService.show(error.message, {cssClass: 'alert-danger', timeout: 5000});
            }
        );
    }

    getActivities() {
        // get activities
        this.activityApi.find<Activity>()
            .subscribe(
                (activityList) => {
                    this.activities = activityList;
                },
                (error) => {
                    console.log(error);
                    this.flashMessagesService.show(error.message, { cssClass: 'alert-danger' });
                }
            );
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        this.fileName = this.selectedFile.name;
    }

    onUpload() {
        // upload code goes here
        // this.evidenceApi.upload('evidence', this.selectedFile)
        //     .subscribe(
        //         (response) => {
        //             console.log(response);
        //             this.flashMessagesService.show(response, {cssClass: 'alert-success'});
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     );
        const uploadData = new FormData();
        uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:3000/api/Evidence/research/upload', uploadData, {
            reportProgress: true,
            observe: 'events'
          })
        .subscribe(
            (event) => {
                console.log(event);

                if(event.type === HttpEventType.UploadProgress){
                    this.progress = Math.round(event.loaded/event.total*100);
                }
                this.flashMessagesService.show('Uploaded Successful!', {cssClass: 'alert-success', timeout: 10000});

            },
            (error) => {
                console.log(error);
                this.flashMessagesService.show(error.message, {cssClass: 'alert-danger'});
            }
        );
    }

    onSelectDutyChanges() {
        this.activityForm.get('dutyId').valueChanges
            .subscribe(
                (val) => {
                    switch (val) {
                        case "11": {
                            this.formalInstructionCollapsed = false;
                            this.communityInstructionCollapsed = true;
                            this.researchCollapsed = true;
                            this.publicServiceCollapsed = true;
                            this.academicAdministrationCollapsed = true;
                            this.personnelDevelopmentCollapsed = true;
                            this.executiveManagementCollapsed = true
                            break;
                        }

                        case "12": {
                            this.formalInstructionCollapsed = true;
                            this.communityInstructionCollapsed = false;
                            this.researchCollapsed = true;
                            this.publicServiceCollapsed = true;
                            this.academicAdministrationCollapsed = true;
                            this.personnelDevelopmentCollapsed = true;
                            this.executiveManagementCollapsed = true
                            break;
                        }

                        case "20": {
                            this.formalInstructionCollapsed = true;
                            this.communityInstructionCollapsed = true;
                            this.researchCollapsed = false;
                            this.publicServiceCollapsed = true;
                            this.academicAdministrationCollapsed = true;
                            this.personnelDevelopmentCollapsed = true;
                            this.executiveManagementCollapsed = true
                            break;
                        }

                        case "30": {
                            this.formalInstructionCollapsed = true;
                            this.communityInstructionCollapsed = true;
                            this.researchCollapsed = true;
                            this.publicServiceCollapsed = false;
                            this.academicAdministrationCollapsed = true;
                            this.personnelDevelopmentCollapsed = true;
                            this.executiveManagementCollapsed = true
                            break;
                        }

                        case "46": {
                            this.formalInstructionCollapsed = true;
                            this.communityInstructionCollapsed = true;
                            this.researchCollapsed = true;
                            this.publicServiceCollapsed = true;
                            this.academicAdministrationCollapsed = false;
                            this.personnelDevelopmentCollapsed = true;
                            this.executiveManagementCollapsed = true
                            break;
                        }

                        case "48": {
                            this.formalInstructionCollapsed = true;
                            this.communityInstructionCollapsed = true;
                            this.researchCollapsed = true;
                            this.publicServiceCollapsed = true;
                            this.academicAdministrationCollapsed = true;
                            this.personnelDevelopmentCollapsed = false;
                            this.executiveManagementCollapsed = true
                            break;
                        }

                        case "61": {
                            this.formalInstructionCollapsed = true;
                            this.communityInstructionCollapsed = true;
                            this.researchCollapsed = true;
                            this.publicServiceCollapsed = true;
                            this.academicAdministrationCollapsed = true;
                            this.personnelDevelopmentCollapsed = true;
                            this.executiveManagementCollapsed = false
                            break;
                        }

                        default: {
                            this.formalInstructionCollapsed = true;
                            this.communityInstructionCollapsed = true;
                            this.researchCollapsed = true;
                            this.publicServiceCollapsed = true;
                            this.academicAdministrationCollapsed = true;
                            this.personnelDevelopmentCollapsed = true;
                            this.executiveManagementCollapsed = true
                            break;
                        }
                    }
                },
                (error) => {
                    console.log(error.message);
                    this.flashMessagesService.show(error.message, { cssClass: 'alert-danger' });
                }
            );
    }

}
