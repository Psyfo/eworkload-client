import { IDepartment } from '../department/department.interface';
import { IDiscipline } from '../discipline/discipline.interface';
import { IPosition } from '../position/position.interface';
import { IWorkFocus } from '../work-focus/work-focus.interface';

export interface IUser {
    _id: string;
    userId: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    photoUrl?: string;
    disciplineIds?: string[];
    disciplines?: IDiscipline[];
    positionId: string;
    position?: IPosition;
    departmentId: string;
    department?: IDepartment;
    gender?: string;
    nationality?: string;
    workFocusName: string;
    workFocus?: IWorkFocus;
    createdAt?: Date;
    updatedAt?: Date;
}
