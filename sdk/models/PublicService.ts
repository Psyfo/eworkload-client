/* tslint:disable */
import {
  Activity
} from '../index';

declare var Object: any;
export interface PublicServiceInterface {
  "publicServiceId": string;
  "description": string;
  "activityId": string;
  "evidenceId": string;
  activity?: Activity;
}

export class PublicService implements PublicServiceInterface {
  "publicServiceId": string;
  "description": string;
  "activityId": string;
  "evidenceId": string;
  activity: Activity;
  constructor(data?: PublicServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PublicService`.
   */
  public static getModelName() {
    return "PublicService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PublicService for dynamic purposes.
  **/
  public static factory(data: PublicServiceInterface): PublicService{
    return new PublicService(data);
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
      name: 'PublicService',
      plural: 'PublicServices',
      path: 'PublicServices',
      idName: 'publicServiceId',
      properties: {
        "publicServiceId": {
          name: 'publicServiceId',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "activityId": {
          name: 'activityId',
          type: 'string'
        },
        "evidenceId": {
          name: 'evidenceId',
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
