import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoopBackConfig, LecturerApi, DutyApi, ActivityApi, LectureStackApi, ResearchApi, CommInstructionApi, PublicServiceApi, Activity, Lecturer, Duty, EvidenceApi } from '../../../../sdk';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    animations: [routerTransition()]
})
export class ActivityComponent implements OnInit {
    activities: Activity[];
    duties: Duty[];
    lecturer: Lecturer;


    constructor(
        private flashMessagesService: FlashMessagesService,
        private lecturerApi: LecturerApi,
        private dutyApi: DutyApi,
        private activityApi: ActivityApi,
        private lectureStackApi: LectureStackApi,
        private researchApi: ResearchApi,
        private commInstructionApi: CommInstructionApi,
        private publicServiceApi: PublicServiceApi,
        private evidenceApi: EvidenceApi
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }

    ngOnInit() {
        this.lecturerApi.getCurrent()
        .subscribe(
            (currentLecturer) => {
                this.lecturer = currentLecturer;
            },
            (error) => {
                this.flashMessagesService.show(error.message, {cssClass: 'alert-danger'});
            }
        );
    }

}
