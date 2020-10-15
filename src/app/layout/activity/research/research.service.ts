import { MenuItem } from 'primeng/api/menuitem';
import { SelectItem } from 'primeng/api/selectitem';
import { map } from 'rxjs/operators';
import {
  AddResearchActivityGQL,
  DeleteResearchActivityGQL,
  EditResearchActivityGQL,
  ResearchActivitiesByUserGQL,
  ResearchActivitiesGQL,
  ResearchActivityGQL,
  ResearchActivityInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {
  loading: boolean;
  errors: any;
  networkStatus: any;

  public outputTypes: SelectItem[] = [
    { label: 'Conference Proceedings', value: 1 },
    { label: 'Journal', value: 2 },
    { label: 'Book', value: 3 },
    { label: 'Chapter', value: 4 },
    { label: 'Patent', value: 5 }
  ];

  public conferenceActivities: SelectItem[] = [
    { label: 'Presented Paper', value: 'Presented Paper' },
    { label: 'Presented Poster', value: 'Presented Poster' },
    { label: 'Attended', value: 'Attended' },
    { label: 'Keynote address', value: 'Keynote address' },
    { label: 'Chaired a session', value: 'Chair a session' },
    { label: 'Served on a panel', value: 'Served on a panel' }
  ];

  constructor(
    private researchActivityGql: ResearchActivityGQL,
    private researchActivitiesGql: ResearchActivitiesGQL,
    private researchActivitiesByUserGql: ResearchActivitiesByUserGQL,
    private addresearchActivityGql: AddResearchActivityGQL,
    private editresearchActivityGql: EditResearchActivityGQL,
    private deleteresearchActivityGql: DeleteResearchActivityGQL
  ) {}

  researchActivity(activityId: string) {
    return this.researchActivityGql
      .watch(
        { activityId: activityId },
        {
          pollInterval: 2000
        }
      )
      .valueChanges.pipe(
        map(
          (result) => result,
          (err) => err
        )
      );
  }
  researchActivities() {
    return this.researchActivitiesGql
      .watch(
        {},
        {
          pollInterval: 2000
        }
      )
      .valueChanges.pipe(
        map(
          (result) => result,
          (err) => err
        )
      );
  }
  researchActivitiesByUser(userId: string) {
    return this.researchActivitiesByUserGql
      .watch(
        { userId: userId },
        {
          pollInterval: 2000
        }
      )
      .valueChanges.pipe(
        map(
          (result) => result,
          (err) => err
        )
      );
  }
  addResearchActivity(activity: ResearchActivityInput) {
    return this.addresearchActivityGql.mutate({ activity: activity }).pipe(
      map(
        (result) => result,
        (err) => err
      )
    );
  }
  editResearchActivity(activity: ResearchActivityInput) {
    return this.editresearchActivityGql.mutate({ activity: activity }).pipe(
      map(
        (result) => result,
        (err) => err
      )
    );
  }
  deleteResearchActivity(activity: ResearchActivityInput) {
    return this.deleteresearchActivityGql.mutate({ activity: activity }).pipe(
      map(
        (result) => result,
        (err) => err
      )
    );
  }
}
