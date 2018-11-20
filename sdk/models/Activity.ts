/* tslint:disable */
import {
  Lecturer,
  Duty,
  LectureStack,
  Research,
  CommInstruction,
  PublicService
} from '../index';

declare var Object: any;
export interface ActivityInterface {
  "activityId": string;
  "lecturerId": string;
  "dutyId": string;
  "estimatedHours": number;
  "actualHours"?: number;
  "approvalStatus": any;
  lecturers?: Lecturer;
  duties?: Duty;
  lectureStacks?: LectureStack[];
  research?: Research[];
  commInstructions?: CommInstruction[];
  publicServices?: PublicService[];
}

export class Activity implements ActivityInterface {
  "activityId": string;
  "lecturerId": string;
  "dutyId": string;
  "estimatedHours": number;
  "actualHours": number;
  "approvalStatus": any;
  lecturers: Lecturer;
  duties: Duty;
  lectureStacks: LectureStack[];
  research: Research[];
  commInstructions: CommInstruction[];
  publicServices: PublicService[];
  constructor(data?: ActivityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Activity`.
   */
  public static getModelName() {
    return "Activity";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Activity for dynamic purposes.
  **/
  public static factory(data: ActivityInterface): Activity{
    return new Activity(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Activity',
      plural: 'Activities',
      path: 'Activities',
      idName: 'activityId',
      properties: {
        "activityId": {
          name: 'activityId',
          type: 'string'
        },
        "lecturerId": {
          name: 'lecturerId',
          type: 'string'
        },
        "dutyId": {
          name: 'dutyId',
          type: 'string'
        },
        "estimatedHours": {
          name: 'estimatedHours',
          type: 'number',
          default: 0
        },
        "actualHours": {
          name: 'actualHours',
          type: 'number'
        },
        "approvalStatus": {
          name: 'approvalStatus',
          type: 'any'
        },
      },
      relations: {
        lecturers: {
          name: 'lecturers',
          type: 'Lecturer',
          model: 'Lecturer',
          relationType: 'hasOne',
                  keyFrom: 'activityId',
          keyTo: 'lecturerId'
        },
        duties: {
          name: 'duties',
          type: 'Duty',
          model: 'Duty',
          relationType: 'hasOne',
                  keyFrom: 'activityId',
          keyTo: 'dutyId'
        },
        lectureStacks: {
          name: 'lectureStacks',
          type: 'LectureStack[]',
          model: 'LectureStack',
          relationType: 'hasMany',
                  keyFrom: 'activityId',
          keyTo: 'activityId'
        },
        research: {
          name: 'research',
          type: 'Research[]',
          model: 'Research',
          relationType: 'hasMany',
                  keyFrom: 'activityId',
          keyTo: 'activityId'
        },
        commInstructions: {
          name: 'commInstructions',
          type: 'CommInstruction[]',
          model: 'CommInstruction',
          relationType: 'hasMany',
                  keyFrom: 'activityId',
          keyTo: 'activityId'
        },
        publicServices: {
          name: 'publicServices',
          type: 'PublicService[]',
          model: 'PublicService',
          relationType: 'hasMany',
                  keyFrom: 'activityId',
          keyTo: 'activityId'
        },
      }
    }
  }
}
