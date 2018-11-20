/* tslint:disable */
import {
  Department
} from '../index';

declare var Object: any;
export interface FacultyInterface {
  "facultyId": string;
  "name": string;
  departments?: Department[];
}

export class Faculty implements FacultyInterface {
  "facultyId": string;
  "name": string;
  departments: Department[];
  constructor(data?: FacultyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Faculty`.
   */
  public static getModelName() {
    return "Faculty";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Faculty for dynamic purposes.
  **/
  public static factory(data: FacultyInterface): Faculty{
    return new Faculty(data);
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
      name: 'Faculty',
      plural: 'Faculties',
      path: 'Faculties',
      idName: 'facultyId',
      properties: {
        "facultyId": {
          name: 'facultyId',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
      },
      relations: {
        departments: {
          name: 'departments',
          type: 'Department[]',
          model: 'Department',
          relationType: 'hasMany',
                  keyFrom: 'facultyId',
          keyTo: 'facultyId'
        },
      }
    }
  }
}
