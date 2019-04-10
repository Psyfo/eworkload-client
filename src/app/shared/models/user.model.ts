import { Discipline } from './discipline.model';
import { Position } from './position.model';

export class User {
    userId: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    discipline: Discipline;
    position: Position;
    gender: string;
    nationality: string;
}
