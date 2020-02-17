import { map } from 'rxjs/operators';
import { CreateGroupGQL, DeleteGroupGQL, GroupGQL, GroupsGQL, UpdateGroupGQL } from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

import {
  GroupExistsGQL,
  GroupInput,
  GroupsByModuleGQL,
  GroupTotalGQL,
  RemainingStudentsGQL
} from '../../../shared/generated/output';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(
    private groupGql: GroupGQL,
    private groupsGql: GroupsGQL,
    private groupsByModuleGql: GroupsByModuleGQL,
    private createGroupGql: CreateGroupGQL,
    private groupTotalGql: GroupTotalGQL,
    private remainingStudentsGql: RemainingStudentsGQL,
    private groupExistsGql: GroupExistsGQL,
    private updateGroupGql: UpdateGroupGQL,
    private deleteGroupGql: DeleteGroupGQL
  ) {}

  group(id: string) {
    return this.groupGql
      .watch(
        { id: id },
        {
          pollInterval: 1000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }
  groups() {
    return this.groupsGql
      .watch(
        {},
        {
          pollInterval: 1000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }
  groupsByModule(moduleId: string) {
    return this.groupsByModuleGql
      .watch(
        { moduleId: moduleId },
        {
          pollInterval: 1000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }
  groupTotal(moduleId: string) {
    return this.groupTotalGql
      .watch(
        { moduleId: moduleId },
        {
          pollInterval: 1000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }
  remainingStudents(moduleId: string) {
    return this.remainingStudentsGql
      .watch(
        { moduleId: moduleId },
        {
          pollInterval: 1000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }
  groupExists(groupId: string, moduleId: string) {
    return this.groupExistsGql
      .watch(
        { groupId: groupId, moduleId: moduleId },
        {
          pollInterval: 1000
        }
      )
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }
  createGroup(group: GroupInput) {
    return this.createGroupGql.mutate({ group: group }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }
  updateGroup(group: GroupInput) {
    return this.updateGroupGql.mutate({ group: group }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }
  deleteGroup(group: GroupInput) {
    return this.deleteGroupGql.mutate({ group: group }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }
}
