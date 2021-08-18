import { IActivity } from '../activity.interface';

export interface IResearchActivity extends IActivity {
  output?: string;
  total?: number;
  workload?: IResearchWorkload;
}

export interface IResearchWorkload {
  total?: number;
  percentageOfTeaching?: number;
  percentageOfAnnual?: number;
}
