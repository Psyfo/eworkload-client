/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Department } from '../../models/Department';
import { Faculty } from '../../models/Faculty';
import { Block } from '../../models/Block';
import { Venue } from '../../models/Venue';
import { Position } from '../../models/Position';
import { OfferingType } from '../../models/OfferingType';
import { Qualification } from '../../models/Qualification';
import { CSubject } from '../../models/Subject';
import { Lecturer } from '../../models/Lecturer';
import { Duty } from '../../models/Duty';
import { Event } from '../../models/Event';
import { Activity } from '../../models/Activity';
import { LectureStack } from '../../models/LectureStack';
import { Research } from '../../models/Research';
import { CommInstruction } from '../../models/CommInstruction';
import { PublicService } from '../../models/PublicService';
import { Tariff } from '../../models/Tariff';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Department: Department,
    Faculty: Faculty,
    Block: Block,
    Venue: Venue,
    Position: Position,
    OfferingType: OfferingType,
    Qualification: Qualification,
    Subject: CSubject,
    Lecturer: Lecturer,
    Duty: Duty,
    Event: Event,
    Activity: Activity,
    LectureStack: LectureStack,
    Research: Research,
    CommInstruction: CommInstruction,
    PublicService: PublicService,
    Tariff: Tariff,

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
