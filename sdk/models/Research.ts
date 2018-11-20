/* tslint:disable */
import {
  Activity
} from '../index';

declare var Object: any;
export interface ResearchInterface {
  "researchId": string;
  "supervision": any;
  "evidenceId": string;
  "activityId"?: string;
  activity?: Activity;
}

export class Research implements ResearchInterface {
  "researchId": string;
  "supervision": any;
  "evidenceId": string;
  "activityId": string;
  activity: Activity;
  constructor(data?: ResearchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Research`.
   */
  public static getModelName() {
    return "Research";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Research for dynamic purposes.
  **/
  public static factory(data: ResearchInterface): Research{
    return new Research(data);
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
      name: 'Research',
      plural: 'Researches',
      path: 'Researches',
      idName: 'researchId',
      properties: {
        "researchId": {
          name: 'researchId',
          type: 'string'
        },
        "supervision": {
          name: 'supervision',
          type: 'any'
        },
        "evidenceId": {
          name: 'evidenceId',
          type: 'string'
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
