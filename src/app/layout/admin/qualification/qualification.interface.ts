import { IDepartment } from '../department/department.interface';
import { IUser } from '../user/user.interface';

export interface IQualification {
  _id?: string;
  qualificationId?: string;
  name?: string;
  type?: string;
  departmentId?: string;
  department?: IDepartment;
  nqfLevel?: string;
  credits?: number;
  coordinatorId?: string;
  coordinator?: IUser;
  createdAt?: Date;
  updatedAt?: Date;
  optionName?: string;
}
