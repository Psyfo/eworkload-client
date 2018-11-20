/* tslint:disable */
import {
  Activity
} from '../index';

declare var Object: any;
export interface LecturerInterface {
  "lecturerId": string;
  "name": any;
  "photo": string;
  "qualificationId": string;
  "departmentId": string;
  "positionId": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
  activities?: Activity[];
}

export class Lecturer implements LecturerInterface {
  "lecturerId": string;
  "name": any;
  "photo": string;
  "qualificationId": string;
  "departmentId": string;
  "positionId": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  activities: Activity[];
  constructor(data?: LecturerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Lecturer`.
   */
  public static getModelName() {
    return "Lecturer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Lecturer for dynamic purposes.
  **/
  public static factory(data: LecturerInterface): Lecturer{
    return new Lecturer(data);
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
      name: 'Lecturer',
      plural: 'Lecturers',
      path: 'Lecturers',
      idName: 'lecturerId',
      properties: {
        "lecturerId": {
          name: 'lecturerId',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "photo": {
          name: 'photo',
          type: 'string'
        },
        "qualificationId": {
          name: 'qualificationId',
          type: 'string'
        },
        "departmentId": {
          name: 'departmentId',
          type: 'string'
        },
        "positionId": {
          name: 'positionId',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'lecturerId',
          keyTo: 'userId'
        },
        activities: {
          name: 'activities',
          type: 'Activity[]',
          model: 'Activity',
          relationType: 'hasMany',
                  keyFrom: 'lecturerId',
          keyTo: 'activityId'
        },
      }
    }
  }
}
