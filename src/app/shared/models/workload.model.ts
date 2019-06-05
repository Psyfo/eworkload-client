import { User } from './user.model';

export class Workload {
    currentHours: number;
    totalHours: number;
    currentFormalInstructionHours: number;
    totalFormalInstructionHours: number;
    currentResearchHours: number;
    totalResearchHours: number;
    currentServiceHours: number;
    totalServiceHours: number;
    userId: string;
    user: User;
}
