import { IModule } from '../module/module.interface';

export interface IGroup {
  _id?: string;
  name?: string;
  moduleIds?: string[];
  modules?: IModule[];
  studentsEnrolled?: number;
  modularity?: number;
  coordinatorId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  optionName?: string;
}
