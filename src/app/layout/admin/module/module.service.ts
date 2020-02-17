import { UnstackedModulesGQL } from './../../../shared/generated/output';
import { map } from 'rxjs/operators';
import {
  AddModuleGQL,
  AddModulesGQL,
  DeleteModuleGQL,
  EditModuleGQL,
  ModuleGQL,
  ModuleInput,
  ModulesByDisciplineGQL,
  ModulesByStackGQL,
  ModulesGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

import { AddModuleToStackGQL, StackModulesGQL, StackedWithGQL } from '../../../shared/generated/output';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  loading: boolean;
  errors: any;
  networkStatus;

  public types = [
    { label: 'Core', value: 'Core' },
    { label: 'Fundamental', value: 'Fundamental' },
    { label: '(GE) Institutional', value: '(GE) Institutional' }
  ];
  public assessmentMethods = [
    { label: 'Exam', value: 'Exam' },
    { label: 'Continuous Assessment', value: 'Continuous Assessment' }
  ];

  constructor(
    private moduleGql: ModuleGQL,
    private modulesGql: ModulesGQL,
    private modulesByDisciplineGql: ModulesByDisciplineGQL,
    private addModuleGql: AddModuleGQL,
    private addModulesGql: AddModulesGQL,
    private editModuleGql: EditModuleGQL,
    private deleteModuleGql: DeleteModuleGQL,
    private modulesByStackGql: ModulesByStackGQL,
    private stackModulesGql: StackModulesGQL,
    private addModulesToStackGql: AddModuleToStackGQL,
    private stackedWithGql: StackedWithGQL,
    private unstackedModulesGql: UnstackedModulesGQL
  ) {}

  modules() {
    return this.modulesGql
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

  modulesByDiscipline(disciplineIds: string[]) {
    return this.modulesByDisciplineGql
      .watch(
        { disciplineIds: disciplineIds },
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

  modulesByStack(stackId: string) {
    return this.modulesByStackGql
      .watch(
        { stackId: stackId },
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

  module(id: string) {
    return this.moduleGql
      .watch(
        {
          id: id
        },
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

  addModule(module: ModuleInput) {
    return this.addModuleGql.mutate({ module: module }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }

  addModules(modules: ModuleInput[]) {
    return this.addModulesGql.mutate({ modules: modules }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }

  editModule(module: ModuleInput) {
    return this.editModuleGql.mutate({ module: module }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }

  deleteModule(module: ModuleInput) {
    return this.deleteModuleGql.mutate({ module: module }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }

  stackModules(ids: string[]) {
    return this.stackModulesGql.mutate({ ids: ids }).pipe(
      map(
        result => result,
        err => err
      )
    );
  }

  stackedWith(id: string, stackId: string) {
    return this.stackedWithGql.watch({ id: id, stackId: stackId }).valueChanges.pipe(
      map(
        result => result,
        err => err
      )
    );
  }

  addModuleToStack(id: string, stackId: string) {
    return this.addModulesToStackGql.mutate({ id: id, stackId: stackId }).pipe(
      result => result,
      err => err
    );
  }
  unstackedModules() {
    return this.unstackedModulesGql.watch().valueChanges.pipe(
      map(
        result => result,
        err => err
      )
    );
  }
}
