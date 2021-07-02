import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { IOfferingType } from './offering-type.interface';
import { OfferingTypeService } from './offering-type.service';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-offering-type',
  templateUrl: './offering-type.component.html',
  styleUrls: ['./offering-type.component.scss'],
  animations: [routerTransition()]
})
export class OfferingTypeComponent implements OnInit {
  breadcrumbs: MenuItem[];

  offeringTypeDialog: boolean;
  offeringTypes: IOfferingType[];
  offeringType: IOfferingType;
  selectedOfferingTypes: IOfferingType[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private offeringTypeService: OfferingTypeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'offeringType',
        url: 'admin/offeringType'
      }
    ];
    this.getOfferingTypes();
    this.timer = setInterval(() => {
      this.getOfferingTypes();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('OfferingType destroyed');
  }

  getOfferingTypes() {
    this.offeringTypeService.all().subscribe((data) => {
      this.offeringTypes = data;
      console.log(JSON.stringify(this.offeringTypes));
    });
  }

  openNew() {
    this.offeringType = {};
    this.submitted = false;
    this.offeringTypeDialog = true;
  }

  deleteSelectedOfferingTypes() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.offeringTypes = this.offeringTypes.filter(
          (val) => !this.selectedOfferingTypes.includes(val)
        );
        this.selectedOfferingTypes = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'OfferingTypes deleted',
          life: 3000
        });
      }
    });
  }

  editOfferingType(offeringType: IOfferingType) {
    this.offeringType = { ...offeringType };
    this.offeringTypeDialog = true;
  }

  deleteOfferingType(offeringType: IOfferingType) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' + offeringType.description + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.offeringTypeService.delete(offeringType._id).subscribe((data) => {
          this.offeringTypes = [...this.offeringTypes];
        });

        this.offeringType = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'OfferingType Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.offeringTypeDialog = false;
    this.submitted = false;
  }

  saveOfferingType() {
    this.submitted = true;

    if (this.offeringType._id.trim()) {
      if (this.offeringType._id) {
        this.offeringTypeService
          .update(this.offeringType)
          .subscribe((data) => (this.offeringType = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'offeringType Updated',
          life: 3000
        });
      } else {
        this.offeringTypeService.create(this.offeringType).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'offeringType Created',
          life: 3000
        });
      }

      //this.offeringTypes = [...this.offeringTypes];
      this.offeringTypeDialog = false;
      this.offeringType = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.offeringTypes.length; i++) {
      if (this.offeringTypes[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
