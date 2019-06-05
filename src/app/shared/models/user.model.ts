import { Discipline } from './discipline.model';
import { Position } from './position.model';
import { WorkFocus } from './work-focus.model';

export class User {
    userId: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    disciplineId: string;
    discipline: Discipline;
    positionId: string;
    position: Position;
    gender: string;
    workFocusName: string;
    workFocus: WorkFocus;
    nationality: string;
}
