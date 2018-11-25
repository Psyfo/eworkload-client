/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { Department } from '../../models/Department';
import { Faculty } from '../../models/Faculty';
import { Block } from '../../models/Block';
import { Venue } from '../../models/Venue';
import { Position } from '../../models/Position';
import { OfferingType } from '../../models/OfferingType';
import { Qualification } from '../../models/Qualification';
import { ActiveSubject } from '../../models/ActiveSubject';
import { Lecturer } from '../../models/Lecturer';
import { Duty } from '../../models/Duty';
import { Event } from '../../models/Event';
import { Activity } from '../../models/Activity';
import { LectureStack } from '../../models/LectureStack';
import { Research } from '../../models/Research';
import { CommInstruction } from '../../models/CommInstruction';
import { PublicService } from '../../models/PublicService';
import { Tariff } from '../../models/Tariff';
import { ActiveSubjectBlock } from '../../models/ActiveSubjectBlock';
import { Discipline } from '../../models/Discipline';
import { LecturerDiscipline } from '../../models/LecturerDiscipline';
import { Evidence } from '../../models/Evidence';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    RoleMapping: RoleMapping,
    Role: Role,
    Department: Department,
    Faculty: Faculty,
    Block: Block,
    Venue: Venue,
    Position: Position,
    OfferingType: OfferingType,
    Qualification: Qualification,
    ActiveSubject: ActiveSubject,
    Lecturer: Lecturer,
    Duty: Duty,
    Event: Event,
    Activity: Activity,
    LectureStack: LectureStack,
    Research: Research,
    CommInstruction: CommInstruction,
    PublicService: PublicService,
    Tariff: Tariff,
    ActiveSubjectBlock: ActiveSubjectBlock,
    Discipline: Discipline,
    LecturerDiscipline: LecturerDiscipline,
    Evidence: Evidence,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
