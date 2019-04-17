import { Faculty } from './faculty.model';

export class Department {
    departmentId: string;
    name: string;
    facultyId: string;
    faculty: Faculty;
}
