import { Duty } from './duty.model';
import { Evidence } from './evidence.model';
import { LectureStack } from './lecture-stack.model';
import { Student } from './student.model';
import { User } from './user.model';

export class Activity {
    activityId: string
    userId: string
    user: User
    dutyId: string
    duty: Duty
    approvalStatus: boolean
}

export class CommInstructionActivity extends Activity {
    description: string
    evidenceId: string
    evidence: Evidence
}

export class PublicServiceActivity extends Activity {
    description: string
    evidenceId: string
    evidence: Evidence
}

export class ResearchActivity extends Activity {
    researchType: string
    researchUrl: string
}

export class SupervisionActivity extends Activity{
    supervisionRole: string
    studentId: string
    student: Student
}

export class LectureActivity extends Activity {
    lectureStackId: string
    lectureStack: LectureStack
}
