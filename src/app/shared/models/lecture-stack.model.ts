import { Discipline } from './discipline.model';
import { Module } from './module.model';

export class LectureStack {
    lectureStackId: string;
    disciplineId: string;
    discipline: Discipline;
    moduleIds: [String];
    modules: [Module];
    groups: number;
}
