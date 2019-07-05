import { Qualification } from './qualification.model';
import { OfferingType } from './offering-type.model';
import { Discipline } from './discipline.model';
import { Venue } from './venue.model';
import { Block } from './block.model';
import { User } from './user.model';

export class Module {
    moduleId: string;
    name: string;
    type: string;
    assessmentMethod: string;
    nqfLevel: string;
    qualificationId: string;
    qualification: Qualification;
    offeringTypeId: string;
    offeringType: OfferingType;
    disciplineId: string;
    discipline: Discipline;
    venueId: string;
    venue: Venue;
    blockId: string;
    block: Block;
    userId: string;
    user: User;
    coordinatorId: string;
    coordinator: User;
    moderatorId: string;
    moderator: User;
    credits: number;
    groupSize: number;
    stackId: string;
    studyPeriod: string;
    lecturedBy: string;
    moderation: string;

    constructor() {
        this.moduleId = '';
        this.name = '';
        this.type = '';
        this.assessmentMethod = '';
        this.nqfLevel = '';
        this.qualificationId = '';
        this.offeringTypeId = '';
        this.disciplineId = '';
        this.venueId = '';
        this.blockId = '';
        this.userId = '';
        this.coordinatorId = '';
        this.moderatorId = '';
        this.credits = 0;
        this.groupSize = 0;
        this.stackId = '';
        this.studyPeriod = '';
        this.lecturedBy = '';
        this.moderation = '';
    }
}

export class ModuleInput {
    moduleId: string;
    name: string;
    type: string;
    assessmentMethod: string;
    nqfLevel: string;
    qualificationId: string;
    offeringTypeId: string;
    disciplineId: string;
    venueId: string;
    blockId: string;
    userId: string;
    coordinatorId: string;
    moderatorId: string;
    credits: number;
    groupSize: number;
    stackId: string;
    studyPeriod: string;
    lecturedBy: string;
    moderation: string;
}
