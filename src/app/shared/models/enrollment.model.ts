import { Qualification } from './qualification.model';

export class Enrollment {
    enrollmentYear: string;
    qualificationId: string;
    qualification: Qualification;
    firstYearEstimated: number;
    secondYearEstimated: number;
    thirdYearEstimated: number;
}
