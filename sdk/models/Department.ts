/* tslint:disable */
import {
  Faculty
} from '../index';

declare var Object: any;
export interface DepartmentInterface {
  "departmentId": string;
  "name": string;
  "facultyId": string;
  faculty?: Faculty;
}

export class Department implements DepartmentInterface {
  "departmentId": string;
  "name": string;
  "facultyId": string;
  faculty: Faculty;
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
      },
      relations: {
        faculty: {
          name: 'faculty',
          type: 'Faculty',
          model: 'Faculty',
          relationType: 'belongsTo',
                  keyFrom: 'facultyId',
          keyTo: 'facultyId'
        },
      }
    }
  }
}
