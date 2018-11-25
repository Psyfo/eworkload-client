/* tslint:disable */
import {
  Department,
  ActiveSubject
} from '../index';

declare var Object: any;
export interface QualificationInterface {
  "qualificationId": string;
  "name": string;
  "description"?: string;
  "departmentId"?: string;
  department?: Department;
  activeSubjects?: ActiveSubject[];
}

export class Qualification implements QualificationInterface {
  "qualificationId": string;
  "name": string;
  "description": string;
  "departmentId": string;
  department: Department;
  activeSubjects: ActiveSubject[];
  constructor(data?: QualificationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Qualification`.
   */
  public static getModelName() {
    return "Qualification";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Qualification for dynamic purposes.
  **/
  public static factory(data: QualificationInterface): Qualification{
    return new Qualification(data);
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
      name: 'Qualification',
      plural: 'Qualifications',
      path: 'Qualifications',
      idName: 'qualificationId',
      properties: {
        "qualificationId": {
          name: 'qualificationId',
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
        "departmentId": {
          name: 'departmentId',
          type: 'string'
        },
      },
      relations: {
        department: {
          name: 'department',
          type: 'Department',
          model: 'Department',
          relationType: 'hasOne',
                  keyFrom: 'qualificationId',
          keyTo: 'departmentId'
        },
        activeSubjects: {
          name: 'activeSubjects',
          type: 'ActiveSubject[]',
          model: 'ActiveSubject',
          relationType: 'hasMany',
                  keyFrom: 'qualificationId',
          keyTo: 'qualificationId'
        },
      }
    }
  }
}
