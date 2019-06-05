import { Department } from './department.model';

export class Qualification {
    qualificationId: string;
    name: string;
    type: string;
    departmentId: string;
    department: Department;
}
