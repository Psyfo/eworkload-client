/* tslint:disable */
import {
  Faculty,
  Qualification
} from '../index';

declare var Object: any;
export interface DepartmentInterface {
  "departmentId": string;
  "name": string;
  "facultyId": string;
  "departmenId"?: string;
  faculty?: Faculty;
  qualifications?: Qualification[];
}

export class Department implements DepartmentInterface {
  "departmentId": string;
  "name": string;
  "facultyId": string;
  "departmenId": string;
  faculty: Faculty;
  qualifications: Qualification[];
  constructor(data?: DepartmentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Department`.
   */
  public static getModelName() {
    return "Department";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Department for dynamic purposes.
  **/
  public static factory(data: DepartmentInterface): Department{
    return new Department(data);
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
      name: 'Department',
      plural: 'y',
      path: 'y',
      idName: 'departmentId',
      properties: {
        "departmentId": {
          name: 'departmentId',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "facultyId": {
          name: 'facultyId',
          type: 'string'
        },
        "departmenId": {
          name: 'departmenId',
          type: 'string'
        },
      },
      relations: {
        faculty: {
          name: 'faculty',
          type: 'Faculty',
          model: 'Faculty',
          relationType: 'hasOne',
                  keyFrom: 'departmentId',
          keyTo: 'facultyId'
        },
        qualifications: {
          name: 'qualifications',
          type: 'Qualification[]',
          model: 'Qualification',
          relationType: 'hasMany',
                  keyFrom: 'departmentId',
          keyTo: 'departmentId'
        },
      }
    }
  }
}
