/* tslint:disable */
import {
  Activity
} from '../index';

declare var Object: any;
export interface LectureStackInterface {
  "lectureStackId": number;
  "coordinator": string;
  "subjects": Array<any>;
  "activityId": string;
  activity?: Activity;
}

export class LectureStack implements LectureStackInterface {
  "lectureStackId": number;
  "coordinator": string;
  "subjects": Array<any>;
  "activityId": string;
  activity: Activity;
  constructor(data?: LectureStackInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LectureStack`.
   */
  public static getModelName() {
    return "LectureStack";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LectureStack for dynamic purposes.
  **/
  public static factory(data: LectureStackInterface): LectureStack{
    return new LectureStack(data);
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
      name: 'LectureStack',
      plural: 'LectureStacks',
      path: 'LectureStacks',
      idName: 'lectureStackId',
      properties: {
        "lectureStackId": {
          name: 'lectureStackId',
          type: 'number'
        },
        "coordinator": {
          name: 'coordinator',
          type: 'string'
        },
        "subjects": {
          name: 'subjects',
          type: 'Array&lt;any&gt;'
        },
        "activityId": {
          name: 'activityId',
          type: 'string'
        },
      },
      relations: {
        activity: {
          name: 'activity',
          type: 'Activity',
          model: 'Activity',
          relationType: 'belongsTo',
                  keyFrom: 'activityId',
          keyTo: 'activityId'
        },
      }
    }
  }
}
