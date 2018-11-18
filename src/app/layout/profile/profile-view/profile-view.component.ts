import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { User } from '../../../shared/models';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-view',
    templateUrl: './profile-view.component.html',
    styleUrls: ['./profile-view.component.scss'],
    animations: [routerTransition()]
})
export class ProfileViewComponent implements OnInit {
    user: User = JSON.parse(localStorage.getItem('currentUser'));

    // Pie
    public pieChartLabels: string[] = [
        'Research',
        'Lecturing',
        'Admin'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    constructor(private flashMessagesService: FlashMessagesService, private router: Router) { }

    ngOnInit() {
    }

    onEdit(user: User): void {
        localStorage.removeItem('editUserId');
        localStorage.setItem('editUserId', this.user.userId.toString());
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
