import { Department } from './department.model';

export class Qualification {
    qualificationId: string;
    name: string;
    type: string;
    departmentId: string;
    department: Department;
}

export class QualificationInput {
    qualificationId: string;
    name: string;
    type: string;
    departmentId: string;
}
