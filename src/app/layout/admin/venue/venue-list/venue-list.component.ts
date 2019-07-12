import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { Venue } from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/services';
import { VenueService } from '../../../../shared/services/venue.service';

@Component({
    selector: 'app-venue-list',
    templateUrl: './venue-list.component.html',
    styleUrls: ['./venue-list.component.scss'],
    animations: [routerTransition()]
})
export class VenueListComponent implements OnInit {
    venues: Venue[];

    // Datatable config
    headers = this.venueService.headers;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    dtElement: DataTableDirective;
    dtRouteParam: string;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
        private venueService: VenueService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    // Lifecycle hooks
    ngOnInit() {
        // Initialize DT
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            responsive: true,
            autoWidth: true,
            rowCallback: (row: Node, data: any[] | Object, index: number) => {
                const self = this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', row).unbind('click');
                $('td', row).bind('click', () => {
                    self.rowClickHandler(data);
                });
                return row;
            }
        };

        this.getVenues();
    }
    ngAfterViewInit(): void {
        this.renderer.listenGlobal('document', 'click', event => {
            // console.log(event.target);

            if (event.target.hasAttribute('venueId')) {
                //this.router.navigate(["edit/:" + event.target.getAttribute("lecturerId")]);
                // this.router.navigate(['lecturer-manage/edit'], { queryParams: { lecturerId: this.dtRouteParam } });
            }
        });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.dtTrigger.unsubscribe();
    }

    // Methods
    rowClickHandler(info: any) {
        // get all column values as array
        this.dtRouteParam = info[0];

        this.router.navigate(['admin/venue/view', this.dtRouteParam], {
            queryParams: { venueId: info[0] }
        });
    }

    getVenues() {
        this.venueService
            .getVenues()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venues = result.data.venues.map(
                    venue => <Venue>(<unknown>venue)
                );
                this.dtTrigger.next();
            });
    }

    onAdd() {
        this.router.navigate(['admin/venue/add']);
    }
}
