import { QualificationsPostgraduateGQL } from './../../../shared/generated/output';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  QualificationGQL,
  QualificationsGQL,
  AddQualificationGQL,
  EditQualificationGQL,
  DeleteQualificationGQL,
  QualificationsUnenrolledGQL,
  QualificationInput
} from 'src/app/shared/generated';
import { SelectItem } from 'primeng/components/common/selectitem';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  loading: boolean;
  errors: any;
  networkStatus: any;

  public types: SelectItem[] = [
    { label: 'Diploma', value: 'Diploma' },
    { label: 'Bachelor', value: 'Bachelor' },
    { label: 'Masters', value: 'Masters' },
    { label: 'Doctorate', value: 'Doctorate' }
  ];

  private unsubscribe = new Subject();

  constructor(
    private qualificationGql: QualificationGQL,
    private qualificationsGql: QualificationsGQL,
    private qualificationsPostgraduateGql: QualificationsPostgraduateGQL,
    private addQualificationGql: AddQualificationGQL,
    private editQualificationGql: EditQualificationGQL,
    private deleteQualificationGql: DeleteQualificationGQL,
    private qualificationsUnenrolledGql: QualificationsUnenrolledGQL
  ) {}

  qualifications() {
    return this.qualificationsGql
      .watch(
        {},
        {
          pollInterval: 2000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }

  qualification(qualificationId: string) {
    return this.qualificationGql
      .watch(
        { qualificationId: qualificationId },
        {
          pollInterval: 2000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }

  qualificationsPostgraduate() {
    return this.qualificationsPostgraduateGql
      .watch(
        {},
        {
          pollInterval: 2000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }

  qualificationsUnenrolled() {
    return this.qualificationsUnenrolledGql
      .watch(
        {},
        {
          pollInterval: 2000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }

  addQualification(qualification: QualificationInput) {
    return this.addQualificationGql
      .mutate({ qualification: qualification })
      .pipe(
        map(
          result => result,
          err => err
        )
      );
  }

  editQualification(qualification: QualificationInput) {
    return this.editQualificationGql
      .mutate({ qualification: qualification })
      .pipe(
        map(
          result => result,
          err => err
        )
      );
  }

  deleteQualification(qualification: QualificationInput) {
    return this.deleteQualificationGql
      .mutate({ qualification: qualification })
      .pipe(
        map(
          result => result,
          err => err
        )
      );
  }
}
