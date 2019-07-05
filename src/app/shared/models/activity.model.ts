import { Qualification } from './qualification.model';
import { OfferingType } from './offering-type.model';
import { Block } from './block.model';
import { Duty } from './duty.model';
import { Evidence } from './evidence.model';
import { Module } from './module.model';
import { Student } from './student.model';
import { User } from './user.model';

export class Activity {
    activityId: string;
    userId: string;
    user: User;
    dutyId: string;
    duty: Duty;
    approvalStatus: boolean;
}

export class CommInstructionActivity extends Activity {
    title: string;
    description: string;
    evidenceId: string;
    evidence: Evidence;
}

export class PublicServiceActivity extends Activity {
    title: string;
    description: string;
    evidenceId: string;
    evidence: Evidence;
}

export class PublicServiceActivityInput {
    title: string;
    description: string;
    evidenceId: string;
}

export class ResearchActivity extends Activity {
    researchType: string;
    researchTitle: string;
    researchDetails: string;
}

export class ResearchActivityInput {
    userId: string;
    dutyId: string;
    researchType: string;
    researchTitle: string;
    researchDetails: string;
}

export class SupervisionActivity extends Activity {
    supervisionRole: string;
    studentId: string;
    student: Student;
}

export class SupervisionActivityInput {
    userId: string;
    dutyId: string;
    supervisionRole: string;
    studentId: string;
    topic: string;
    year: string;
}

export class FormalInstructionActivity extends Activity {
    moduleId: string;
    module: Module;
    blockId: string;
    block: Block;
    offeringTypeId: string;
    offeringType: OfferingType;
    qualificationId: string;
    qualification: Qualification;
    baseContactHours: number;
    coordinationHours: number;
    studentSupportHours: number;
    preparationTimeHours: number;
    assessmentSettingHours: number;
    examMarkingHours: number;
    courseworkMarkingHours: number;
    feedbackHours: number;
    formativeAssessmentHours: number;
    moderationHours: number;
    otherHours: number;
    totalHours: number;
    teachingPercentage: number;
}
export class FormalInstructionActivityInput {
    userId: string;
    dutyId: string;
    moduleId: string;
    blockId: string;
    offeringTypeId: string;
    qualificationId: string;
}
