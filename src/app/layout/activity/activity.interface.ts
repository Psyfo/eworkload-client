import { IDuty } from '../admin/duty/duty.interface';
import { IUser } from '../admin/user/user.interface';

export interface IActivity {
  _id?: string;
  activityId?: string;
  userId?: string;
  user?: IUser;
  dutyId?: string;
  duty?: IDuty;
  approvalStatus?: string;
}
