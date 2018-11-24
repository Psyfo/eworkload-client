/* tslint:disable */
import {
  Qualification,
  Block
} from '../index';

declare var Object: any;
export interface ActiveSubjectInterface {
  "subjectId": string;
  "name": string;
  "description"?: string;
  "offeringTypeId": string;
  "nqfLevel": number;
  "credits": number;
  "qualificationId": string;
  "major": boolean;
  "type"?: string;
  "baseContact"?: number;
  "repeatContact"?: number;
  "basePractical"?: number;
  "repeatPractical"?: number;
  qualification?: Qualification;
  blocks?: Block[];
}

export class ActiveSubject implements ActiveSubjectInterface {
  "subjectId": string;
  "name": string;
  "description": string;
  "offeringTypeId": string;
  "nqfLevel": number;
  "credits": number;
  "qualificationId": string;
  "major": boolean;
  "type": string;
  "baseContact": number;
  "repeatContact": number;
  "basePractical": number;
  "repeatPractical": number;
  qualification: Qualification;
  blocks: Block[];
  constructor(data?: ActiveSubjectInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ActiveSubject`.
   */
  public static getModelName() {
    return "ActiveSubject";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ActiveSubject for dynamic purposes.
  **/
  public static factory(data: ActiveSubjectInterface): ActiveSubject{
    return new ActiveSubject(data);
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
      name: 'ActiveSubject',
      plural: 'ActiveSubjects',
      path: 'ActiveSubjects',
      idName: 'subjectId',
      properties: {
        "subjectId": {
          name: 'subjectId',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "offeringTypeId": {
          name: 'offeringTypeId',
          type: 'string'
        },
        "nqfLevel": {
          name: 'nqfLevel',
          type: 'number'
        },
        "credits": {
          name: 'credits',
          type: 'number'
        },
        "qualificationId": {
          name: 'qualificationId',
          type: 'string'
        },
        "major": {
          name: 'major',
          type: 'boolean'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "baseContact": {
          name: 'baseContact',
          type: 'number'
        },
        "repeatContact": {
          name: 'repeatContact',
          type: 'number'
        },
        "basePractical": {
          name: 'basePractical',
          type: 'number'
        },
        "repeatPractical": {
          name: 'repeatPractical',
          type: 'number'
        },
      },
      relations: {
        qualification: {
          name: 'qualification',
          type: 'Qualification',
          model: 'Qualification',
          relationType: 'belongsTo',
                  keyFrom: 'qualificationId',
          keyTo: 'qualificationId'
        },
        blocks: {
          name: 'blocks',
          type: 'Block[]',
          model: 'Block',
          relationType: 'hasMany',
          modelThrough: 'ActiveSubjectBlock',
          keyThrough: 'blockId',
          keyFrom: 'subjectId',
          keyTo: 'activeSubjectId'
        },
      }
    }
  }
}
