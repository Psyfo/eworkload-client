/* tslint:disable */

declare var Object: any;
export interface SubjectInterface {
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
}

export class CSubject implements SubjectInterface {
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
  constructor(data?: SubjectInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Subject`.
   */
  public static getModelName() {
    return "Subject";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Subject for dynamic purposes.
  **/
  public static factory(data: SubjectInterface): CSubject{
    return new CSubject(data);
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
      name: 'Subject',
      plural: 'Subjects',
      path: 'Subjects',
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
      }
    }
  }
}
