import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Lecturer, LecturerApi, LoopBackAuth } from '../../../../../sdk';

@Component({
    selector: 'app-profile-view',
    templateUrl: './profile-view.component.html',
    styleUrls: ['./profile-view.component.scss'],
    animations: [routerTransition()]
})
export class ProfileViewComponent implements OnInit {
    lecturer: Lecturer = new Lecturer();


    // Pie
    public pieChartLabels: string[] = [
        'Research',
        'Lecturing',
        'Admin'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    constructor(
        private flashMessagesService: FlashMessagesService,
        private router: Router,
        private lecturerApi: LecturerApi
    ) { }

    ngOnInit() {
        this.lecturerApi.getCurrent()
            .subscribe(
                (lecturerData) => {
                    this.lecturer = lecturerData;
                    this.flashMessagesService.show(`Welcome ${this.lecturer.name.firstName} ${this.lecturer.name.lastName}`, {cssClass: 'alert-success'});
                },
                (error) => {
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                    console.log(error);
                }
            );
    }

    onEdit(): void {
        this.router.navigate(['profile/edit']);
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
