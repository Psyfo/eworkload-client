import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Staff } from '../../../shared/models/staff.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent implements OnInit {

  constructor(private staffService: StaffService, private route: ActivatedRoute) { }
  staff: Staff;


  ngOnInit() {
      this.route.params
        .subscribe(
            (params: Params) => {
                this.staff = this.staffService.getStaff(+params['staffId']);
            }
        );
      
      // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );
  }

}
