import { IStudent } from '../../admin/student/student.interface';
import { IActivity } from '../activity.interface';

export interface ISupervisionActivity extends IActivity {
  supervisionRole?: string;
  split?: number;
  studentId?: string;
  student?: IStudent;
  year?: string;
  total?: number;
  percentageOfTeaching?: number;
  percentageOfAnnual?: number;
}
