import { IGroup } from '../../admin/group/group.interface';
import { IActivity } from '../activity.interface';

export interface IFormalInstructionActivity extends IActivity {
  _id?: string;
  groupId?: string;
  group?: IGroup;
  workload?: IFormalInstructionWorkload;
}

export interface IFormalInstructionWorkload {
  baseContact?: number;
  coordination?: number;
  studentSupport?: number;
  preparationTime?: number;
  assessmentSetting?: number;
  examMarking?: number;
  courseworkMarking?: number;
  feedback?: number;
  formativeAssessment?: number;
  other?: number;
  total?: number;
  percentageOfTeaching?: number;
  percentageOfAnnual?: number;
}
